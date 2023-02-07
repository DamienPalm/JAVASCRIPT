const notes = [5, 10, 15, 20];

let somme = 0;

for (let indice in notes) {
    somme += notes[indice];
  }
  let moyenne = somme / notes.length;
  console.log("La moyenne est de " + moyenne);