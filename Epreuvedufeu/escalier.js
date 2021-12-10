//var chiffre = 4, espace = " ", hashtag = "#";

//prompt("Donne moi un chiffre");

//echo (chiffre)


const argument1 = process.argv[2];

var espace, hashtag, lescalier;

function escalier(chiffre) {
  
  if (isNaN(chiffre)) {
    console.log("Put a number");
  }
  
  for (var i = 1; i <= chiffre; i++) {
        espace = chiffre - i;
        hashtag = i;
        lescalier = " ".repeat(espace) + "#".repeat (hashtag);

    console.log(lescalier)
  }
  
}

escalier(argument1);



/* entrée d'un chiffre N = 4
N - 1 = nombre d'espaces1 (3)
hashtag * 1 = nb hashtag1 (1)
afficher nb d'espaces1 + nb hashtag1 puis entrer

nombre d'espaces1 (3) - 1 = nombre d'espaces2 (2)
nb hashtag1 (1) + 1 = nb hashtag2 (2)
afficher nb d'espaces2 + nb hashtag2 puis entrer

nombre d'espaces2 (2) - 1 = nombre d'espaces3 (1)
nb hashtag2 (2) + 1 = nb hashtag3 (3)
afficher nb d'espaces3 + nb hashtag3 puis entrer

nombre d'espaces3 (1) - 1 = nombre d'espaces4 (0)
nb hashtag3 (3) + 1 = nb hashtag4 (4)
afficher nb d'espaces4 + nb hashtag4 puis entrer


   #
  ##
 ###
####
*/