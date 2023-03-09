const pokedex = document.getElementById("pokedex");
const search = document.getElementById("search");

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1008`;
    const res = await fetch(url);
    const listPokemon = await res.json();
    const pokemon = listPokemon.results.map((result, index) => ({
        ...result,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
    }));
    console.log(pokemon);
    afficherPokemon(pokemon);

    search.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        console.log(searchString);
        const filteredPokemon = pokemon.filter(poke => {
            return (poke.name.toLowerCase().includes(searchString));
        });
        console.log(filteredPokemon);
        afficherPokemon(filteredPokemon);
    });

};

const afficherPokemon = (pokemon) => {
    const pokemonHTML = pokemon.map(poke => {
        return `
        <div class="card w-96 bg-base-100 shadow-xl p-3" onclick="selectPokemon(${poke.id})" id="card">
            <img class="rounded-t-lg" src="${poke.image}" alt="${poke.name}"/>
            <div class="card-body rounded-b-lg">
                <p>No.${poke.id}</p>
                <h2 class="card-title text-black text-4xl font-normal">${poke.name}</h2>
            </div>
        </div>
    `}).join('')
    pokedex.innerHTML = pokemonHTML;
};



const selectPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const poke = await res.json();
    afficherPopup(poke);
};

const afficherPopup = (poke) => {
    const type = poke.types.map(type => type.type.name).join(' ');
    const image = poke.sprites['front_shiny'];
    const popup = `
    <div class="flex justify-center items-center z-20" id="popup">
        <div class="card w-96 bg-base-100 shadow-xl p-3" id="shiny">
            <img class="rounded-t-lg" src="${image}" alt="${poke.name}"/>
            <div class="card-body rounded-b-lg">
                <p>No.${poke.id}</p>
                <h2 class="card-title text-black text-4xl font-normal">${poke.name}</h2>
                <p class="text-black">Height: ${poke.height} | Weight: ${poke.weight}</p>
                <p class="text-black">Type : ${type}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-square btn-outline" id="close" onclick="closePopup()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    pokedex.innerHTML = popup + pokedex.innerHTML;

    const shiny = document.querySelectorAll("#shiny");

    shiny.forEach(el => {
        el.addEventListener("mousemove", e => {

            let elRect = el.getBoundingClientRect()

            let x = e.clientX - elRect.x
            let y = e.clientY - elRect.y

            let midCardWidth = elRect.width / 2
            let midCardHeight = elRect.height / 2

            let angleY = -(x - midCardWidth) / 8
            let angleX = (y - midCardHeight) / 8

            el.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        })

        el.addEventListener("mouseleave", () => {
            el.style.transform = "rotateX(0) rotateY(0)"
        })
    })
};

const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.parentElement.removeChild(popup);
}

fetchPokemon();

// const fetchPokemon = function () {
//     const url = `https://pokeapi.co/api/v2/pokemon/1`;
//     fetch(url)
//         .then(res => {
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//         });
// };