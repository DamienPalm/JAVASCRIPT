const notes = [5, 10, 15, 20];

let somme = 0;

for (let value of notes) {
  somme += value;
}

let moyenne = somme / notes.length;
console.log("La moyenne est de " + moyenne);