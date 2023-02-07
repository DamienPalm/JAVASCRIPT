let notes = [1, 10, 15, 20];
[note1, note2, note3, note4] = notes;

console.log("note 4 : " + note4);

let personnes = {
    nom: "Riri",
    age: 20,
    sexe: "H"
};

({ nom, age, sexe } = personnes);
console.log(sexe);