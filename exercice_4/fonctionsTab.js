const notes = [5, 10, 15, 20];

// 1°)
for (let [key, value] of Object.entries(notes)) {
    console.log(` Note ${key} : ${value}`);
};

// 2°)
const notes2 = notes.map(function (note) {
    return Math.pow(note, 2);
});

console.log(notes2);

// 3°)
const tab = [
    { nom: "Riri", age: 25 },
    { nom: "Fifi", age: 23 },
    { nom: "Loulou", age: 22 },
    { nom: "Titi", age: 24 },
];
const filteredTab = tab.filter((tab) => tab.nom !== 'Titi')
console.log(filteredTab);

tab.splice(2, 1)
console.log(tab);
