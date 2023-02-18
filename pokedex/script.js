const pokedex = document.getElementById("pokedex")

const fetchPokemon = function () {
    const promises = [];
    for (let i = 1; i <= 905; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        promises.push(fetch(url).then(res => res.json()));
    };

    Promise.all(promises).then(results => {
        const pokemon = results.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.sprites['front_shiny'],
            type: data.types.map(type => type.type.name).join(' ')
        }));

        afficherPokemon(pokemon)
    });
};

const afficherPokemon = (pokemon) => {
    const pokemonHTML = pokemon.map(poke => `
        <div class="card col-10 col-md-5 col-lg-3 m-1 p-2">
            <img src="${poke.image}" class="card-img-top"/>
            <div class="card-body">
                <p class="card-text text-secondary">No.${poke.id}</p>
                <h2 class="card-title">${poke.name}</h2>
                <p class="card-text">${poke.type}</p>
            </div>
        </div>
    `).join('');
    pokedex.innerHTML = pokemonHTML;
};

fetchPokemon();