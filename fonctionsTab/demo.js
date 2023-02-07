// const notes = [5, 10, 15, 20];
// console.log(notes);

// notes.pop(); // la fonction 'POP' supprime le premier élément de la pile qui correspond au dernier élément d'un tableau.
// console.log(notes);


// notes.push(17, 16); // La fonction 'PUSH' permet de rajouter des éléments en haut de la pile.
// console.log(notes);


// // La fonction MAP permet de récuperer un tab et d'apporter une modif et de retourner ce nouveau tab modifié,
// // elle s'utilise avec une fonctyion 'CALLBACK'
// const notes2 = notes.map(function (note) { // une fonction sans nom est une fonction anonyme
//     return note ** note; // return Math.pow(note, 2);
// });
// console.log(notes2);

// // Récupérer la note 15
// const index = notes.findIndex(function (note) {
//     return note === 15;
// })
// console.log(index);

const etudiants = [
    ["riri", 5, 10, 15, 20],
    ["fifi", 15, 12, 16, 19],
    ["loulou", 6, 11, 13, 3]
]
const valeur = etudiants.find(function (etu) {
    return etu[0] === "fifi";
});
console.log(valeur);