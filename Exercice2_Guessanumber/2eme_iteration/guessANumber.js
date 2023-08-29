//Fonction de récupération du nombre joueur 1
let givenNumber = 0;
let miniNumb = 0;
let maxiNumb = 50;
function numberOne () {
    givenNumber = document.getElementById("number1").value;
    if (givenNumber > -1 && givenNumber < 51) {
        alert (`La valeur ${givenNumber} est stockée pour J1 !`);
        document.getElementById("number1").value = "0-50";
        document.body.innerHTML += `<h2><div id="toto"><label for="number2">Player 2 choose your number :</label> 
            ${miniNumb} < 
            <input type="number" id="number2" name="number2" required /> 
            < ${maxiNumb} 
            <input type="button" value="Valider" onclick="numberTwo();" />
            </div></h2>`;
            console.log("numberOne givenNumber :" + givenNumber)
            return givenNumber;
    } else {
        alert ("La veleur doit être comprise entre 0 et 50");
        document.getElementById("number1").value="0-50";
    }
}

//Fonction pour savoir si on a gagné
function didIWin () {
    if ( guessNumber > givenNumber ) {
        maxiNumb = guessNumber;
        alert(`Le nombre recherché est plus petit. Déjà ${tryNumber} éssai.`);
        document.getElementById("toto").innerHTML = `<label for="number2">Player 2 choose your number :</label> 
        ${miniNumb} < 
        <input type="number" id="number2" name="number2" required /> 
        < ${maxiNumb} 
        <input type="button" value="Valider" onclick="numberTwo();" />
        `;
    } else if ( guessNumber < givenNumber ) {
        miniNumb = guessNumber;
        alert(`Le nombre recharché est plus grand. Déjà ${tryNumber} éssai.`);
        document.getElementById("toto").innerHTML = `<label for="number2">Player 2 choose your number :</label> 
        ${miniNumb} < 
        <input type="number" id="number2" name="number2" required /> 
        < ${maxiNumb} 
        <input type="button" value="Valider" onclick="numberTwo();" />
        `;
    } else if ( guessNumber === givenNumber ) {
        alert (`Bien joué le numéro déviné est le bon en ${tryNumber} éssai !`);
        location.reload();
    };
    console.log ("miniNum : ", miniNumb);
    console.log ("maxiNumb", maxiNumb);
}

//Fonction pour récupérer la valeur du joueur 2
let guessNumber = 0;
let tryNumber = 1;
function numberTwo () {
    guessNumber = document.getElementById("number2").value;
    didIWin();
    tryNumber ++;
    return guessNumber;
}