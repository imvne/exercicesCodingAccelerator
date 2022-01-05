// different types de données
let chaine = "Je suis une chaine";

// let nouvelleChaine = "Chaine précédente : " + chaine;

let nouvelleChaine = `Chaine précédente : ${chaine} `;

console.log(nouvelleChaine);

let string = "coucou";

let number = 24;

let booleen = true;

let array = ["je", "suis", 24];

let object = {
  prenom: "Lila",
  age: 29,
  ville: "Rouen",
};

console.log(typeof array);

//
// opérateurs/ opérateurs d'affectation
let total = 2;

//total = total + 5;
total += 5;

console.log(total);

//
// structures de contrôle
let x = 7;
let y = "7";

if (x < y) {
  console.log(x + " est inférieur à " + y);
} else if (x > y) {
  console.log(`${x} est supérieur à ${y}`);
} else if (x == y) {
  console.log("x et y égaux en valeur");
} else if (x === y) {
  console.log("x et y égaux en valeur et en type");
}

// ici on test si x et y sont trictement egaux OU x est superieur à 3. OU -> || ET -> &&
if (x === y || x > 3) {
  console.log("c vrai");
} else {
  console.log("c faux");
}

// ici on teste si X est true, avce le point d'exclamation on teste l'inverse
if (x) {
  console.log("x existe");
} else {
  console.log("x n'existe pas");
}

//
// fonctions
function doATHing() {
  console.log("Im doing smth");
}

doATHing();

// fonction fléchée
const doATask = (tache) => {
  console.log("Je fais " + tache);
};
doATask("le ménage");
doATask("les courses");

function calc(x, y) {
  return x + y;
}
calc(2, 7);
