//Fonction pour diviser la date en tableau
// function parseDate(date) {
//     const myDateArray = date.split("/");
//     const myDateObject ={
//       day: parseInt(myDateArray[0]),
//       month: parseInt(myDateArray[1]),
//       year: parseInt(myDateArray[2]),
//     }
//     return myDateObject;
//   }
// console.log(parseDate(date))
function getDate() {
    var date = document.getElementById("dateInput").value;
    console.log(date);
  }
function getNumber() {
    var number = document.getElementById("numberInput").value;
    console.log(number);
  }
const dateUser = getDate();
const numberUser = getNumber()
//---------------------ETAPE 1--------------------------------------------
//Etape pour créer des constantes de date
const myDateArray = dateUser.split("/");
const dayUser = myDateArray[0];
const monthUser = myDateArray[1];
const yearUser = myDateArray[2];

//Fonction pour valider le nombre max de jours selon le mois
const daysInMonth = {
    '01' : 31,
    '02' : 28,
    '03' : 31,
    '04' : 30,
    '05' : 31,
    '06' : 30,
    '07' : 31,
    '08' : 31,
    '09' : 30,
    '10' : 31,
    '11' : 30,
    '12' : 31
}
function checkDaysInMonth () {
    if (day<=daysInMonth[month]) {
        return true;
    }
    return false;
}

//Fonction pour valider la date
function isValidDateUser () {
    if (checkDaysInMonth(dateUser) == true && parseInt(monthUser) <= 12 && 999 < parseInt(yearUser) < 9999) {
        return true;
    }
    return false;
}

function isValidDate () {
    if (checkDaysInMonth(today) == true && parseInt(month) <= 12 && 999 < parseInt(year) < 9999) {
        return true;
    }
    return false;
}

//----------------------------ETAPE 2-----------------------------------------------------------------
//Etape pour faire un tableau de la date
const fullDate = day+month+year
const fullDateArray = fullDate.split ("");

//Fonction pour vérifier si la date est un palindrome
function isPalindrome() {
    if(fullDateArray[0]==fullDateArray[7] && fullDateArray[1]==fullDateArray[6] && fullDateArray[2]==fullDateArray[5] && fullDateArray[3]==fullDateArray[4]){
        return true
    }
    return false
}

//---------------------------------ETAPE 3-----------------------------------------------------
//Etape pour récupérer la date du jour en string
let today = new Date();
let year = String(today.getFullYear());
let month = String(today.getUTCMonth()+1);
let monthZero = month.padStart(2,"0");
let day = String (today.getUTCDate())
console.log(year)
console.log(monthZero)
console.log(day)

//Fonction pour trouver les x prochains palindromes
function getNextPalindromes(x) {
    let result = [];
        while (result.length<x){
        today.setDate(today.getDate() + 1);
            if(isValidDate(today)==true && isPalindrome(today)==true) {
                result.push(day + "/" + month + "/" + year)
            }
    }
    }
    console.log(getNextPalindromes (8))