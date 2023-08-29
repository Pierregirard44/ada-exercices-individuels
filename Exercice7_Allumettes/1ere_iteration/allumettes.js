// let numberOfMatches = 50; // Nombre d'allumettes au départ

// //Fonction qui permet de retirer les allumettes
// function removeMatches(matchesLeft, matchesToRemove) {
//     if (matchesToRemove > matchesLeft) {
//         console.log("Il ne reste pas assez d'allumettes.");
//     } else {
//         matchesLeft -= matchesToRemove;
//         console.log(matchesToRemove + " allumettes ont été enlevées. Il en reste " + matchesLeft + ".");
//         numberOfMatches = matchesLeft;
//         return numberOfMatches
//     }
// }

// //Fonction qui relance la partie tant qu'il reste des allumettes
// while (numberOfMatches > 0) {
//     let matchesToRemove = parseInt(prompt("Combien d'allumettes souhaitez-vous retirer ?"));
//     removeMatches(numberOfMatches, matchesToRemove);
// }

function retirerAllumettes(n) {
    if (n < 1 || n > 6) {
      alert ("Le nombre d'allumettes à retirer doit être compris entre 1 et 6.");
      return false;
    } else {
      return true;
    }
  }
   let nbAllumettes = 50;
   let joueur = 1;
   while (nbAllumettes > 0) {
    console.log("Il reste", nbAllumettes, "allumettes.");
    if (joueur === 1) {
      alert ("C'est au joueur 1 de jouer.");
    } else {
      alert ("C'est au joueur 2 de jouer.");
    }
     let choix = parseInt(prompt("Combien d'allumettes voulez-vous retirer ?"));
     if (retirerAllumettes(choix)) {
      nbAllumettes -= choix;
      joueur = joueur === 1 ? 2 : 1;
    }
     if (nbAllumettes <= 0) {
      alert ("Le joueur", joueur, "a gagné !");
    }
  }