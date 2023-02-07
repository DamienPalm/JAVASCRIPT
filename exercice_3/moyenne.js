const notes = [5, 10, 15, 20];

const somme = notes.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
);

moyenne = somme / notes.length;

console.log("La moyenne est de " + moyenne);


