const Ville1 = {
    nom: "Paris",
    lat: 48.7424,
    long: 2.3488
};

const Ville2 = {
    nom: "Bordeaux",
    lat: 44.8333,
    long: -0.5667
};

const Ville3 = {
    nom: "Dunkerque",
    lat: 51.035,
    long: 2.378
};

const tab = [Ville1, Ville2, Ville3];

function affichageCoordonnees() {
    for (let value of tab) {
        console.log(value.nom.padStart(15, '-').padEnd(25, '-') + "\n" + "Latitude : " + value.lat + "\n" + "Longitude : " + value.long);
    }
}

affichageCoordonnees();