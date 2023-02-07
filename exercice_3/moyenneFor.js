const notes = [5, 10, 15, 20];
let somme = 0;

for (let i = 0; i < notes.length; i++) {
  somme += notes[i]; // somme = somme + notes[i] '+=' peut être une addition ou une concaténation en fonction du types des opérandes 
}

let moyenne = somme / notes.length;
console.log("La moyenne est de " + moyenne);