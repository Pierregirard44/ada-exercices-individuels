//fonction qui renvoie le nombre de jours par mois selon l'annee
function maxDaysinMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  //fonction qui verifie que le jour est bien compris entre 0 et 31
  function validDay(newDay, newMonth, newYear) {
    let maxDay = maxDaysinMonth(newMonth, newYear); // maxDay variable qui contient le result de maxDaysinMonth
    return newDay <= maxDay && newDay > 0; // condition booleenne pas besoin de mettre return true et return false
  }
  //fonction qui verifie que l'annee est bien comprise entre 999 et 9999
  function validYear(newYear) {
    return newYear <= 9999 && newYear > 999; //condition booleenne return true ou false
  }
  //fonction qui verifie que le mois est compris entre 0 et 12
  function validMonth(month) {
    return month <= 12 && month > 0;
  }
  function parseDate(dateAsString) {
    let array = dateAsString.split("/");
    let day = parseInt(array[0]);
    let month = parseInt(array[1]);
    let year = parseInt(array[2]);
    return [day, month, year];
  }
  function isValidDate(date) {
    let [day, month, year] = parseDate(date); //pattern matching
    return validDay(day, month, year) && validMonth(month) && validYear(year);
  }
  console.log (isValidDate("21/14/56"))
  //function qui permet de transformer une date en string en array
  function dateAsStringToArray(dateAsString) {
    let arrayOfDate = Array.from(dateAsString);
    return arrayOfDate;
  }
  //fonction pour retirer les slashs des dates
  function deleteSlash(dateAsString) {
    let myArray = dateAsStringToArray(dateAsString);
    delete myArray[2];
    delete myArray[5];
    return myArray;
  }
  //fonction qui reformate le tableau
  function formatArray(dateAsString) {
    let newArray = deleteSlash(dateAsString);
    let noEmptyStrings = [];
    for (let item of newArray) {
      if (item !== undefined) {
        noEmptyStrings.push(item);
      }
    }
    return noEmptyStrings;
  }
  //fonction qui fait un reverse de tableau
  function reverseArray(dateAsString) {
    let reverseArray = formatArray(dateAsString);
    return reverseArray.reverse();
  }
  //fonction qui renvoie true si les deux tableaux sont similaires
  function isDatePalindrome(dateAsString) {
    if (!isValidDate(dateAsString)) return false;
    // return isPalindrome(dateAsString);
    let array1 = formatArray(dateAsString);
    let array2 = reverseArray(dateAsString);
    return array1.toString() === array2.toString();
  }
  console.log(isDatePalindrome("11/02/2011"));
  console.log(isDatePalindrome("26/02/1989"));