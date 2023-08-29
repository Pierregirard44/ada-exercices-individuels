// ETAPE 1
​
// Version dictionnaire - Todo : à compléter - on peut aussi gérer les années bissextiles
function maxDaysInMonth(stringMonth){
  const daysPerMonth = { "01" : 31, "02" : 28, "03" : 31, "04" : 30 }
  return parseInt(daysPerMonth[stringMonth])
}
​
// Version alternative avec des if et des entiers en paramètres
function maxDaysInMonthAlt(month) {
  if (month == 2) {
		return 28;
  } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
		return 31;
  } else {
		return 30
  }
}
​
// fonction isValidDate qui prend en paramètre une date en string au format "dd/mm/aaaa" et renvoie true si elle est valide, false sinon
function isValidDate(stringDate){
  // découper date
  let dateTab = stringDate.split("/")
  let day = parseInt(dateTab[0])
  let month = parseInt(dateTab[1])
  let year = parseInt(dateTab[2])
  // tester si le jour dd est compris entre 1 et 31
  // solution 1 : if (!((day >= 1) && (day <= maxDaysInMonth(month))))
  // solution 2 :
  if ((day < 1) || (day > maxDaysInMonth(dateTab[1])))
    return false
  // tester si le mois mm est compris entre 1 et 12
  if ((month < 1) || (month > 12))
    return false
  // tester si l'année est comprise entre 1000 et 9999
  if ((year < 1000) || (year > 9999))
    return false
  // si j'arrive ici, c'est que ma date est buen
  return true
}
​
console.log(isValidDate("31/12/2005")) // true
console.log(isValidDate("-12/12/2005")) // false
console.log(isValidDate("31/15/2005")) // false
console.log(isValidDate("31/12/999")) // false
console.log(isValidDate("02/12/1999")) // true
console.log(isValidDate("31/04/1999")) // false
​
// ETAPE 2
​
//fonction isPalindrome qui prend une date en string en paramètre "dd/mm/aaaa" et retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false
function isPalindrome(stringDate) {
  
  // tester si la date est valide
  if (!isValidDate(stringDate)) return false
  
  // enlever les "/" de ma date
  //solution regex 1 : const cleanStringDate = stringDate.replace(/[\/\s\p{P}]/gu,"")
  // solution regex 2 : const cleanStringDate = stringDate.replace(/\//g, '')
 // solution replaceAll sans regex :
  const cleanStringDate = stringDate.replaceAll('/', '');
  // ma date est maintenant au format "ddmmaaaa"
  
	let baseArray = cleanStringDate.split('');
  //console.log(baseArray)
  let reversedArray = baseArray.slice(0).reverse(); //slice permet de faire une copie, le reverse() modifiant sinon l'array de départ
  //console.log(reversedArray)
  if (reversedArray.join('') === baseArray.join('')) {
    return true;
  } else {
    return false;
  }
}
​
console.log(isPalindrome("30/12/2005")) // false
console.log(isPalindrome("02/12/2120")) // true