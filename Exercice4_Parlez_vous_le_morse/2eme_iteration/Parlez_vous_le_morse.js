//Fonction pour tranformer un texte en tableau de caractères
function getLatinCharacterList(textToTab) {
    var tableau = Array.from(textToTab);
    return tableau;
}
// console.log(getLatinCharacterList("Hello World"))
//Tableau de correspodance des lettres en morse
const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
	' ':'.......'
}

//Fonction qui fait correspondre un caractère à du morse
function translateLatinCharacter(caractere) {
	return latinToMorse[caractere];
}
let caractere = "A";
let correspondance = translateLatinCharacter(caractere);
console.log(correspondance);

//Fonction pour passer des minuscules en majuscules
function transformerEnMajuscules(text) {
	return text.toUpperCase();
}
let textUpper = transformerEnMajuscules(text);
console.log(textUpper);
let textUpperTab = getLatinCharacterList(textUpper)
console.log(textUpperTab)

//Fonction pour passer le tableau des majuscules en morse
let translatedText = [];
for (let i = 0; i < textUpperTab.length; i++) {
	let translatedCharacter = translateLatinCharacter(textUpperTab[i]);
	translatedText.push(translatedCharacter);
}
console.log(translatedText);

//Récupérer la valeur de l'input text1 dans HTML
let text = document.getElementById("text1");
document.querySelector("#tradMorse").innerHTML+= "" + textUpper + ""

//Tableau de correspondance du morse en lettre
const morseToLatin = {
	'-': "T",
	'--': "M",
	'---': "O",
	'--.': "G",
	'--.-': "Q",
	'--..': "Z",
	'-.': "N",
	'-.-': "K",
	'-.--': "Y",
	'-.-.': "C",
	'-..': "D",
	'-..-': "X",
	'-...': "B",
	'.': "E",
	'.-': "A",
	'.--': "W",
	'.---': "J",
	'.--.': "P",
	'.-.': "R",
	'.-..': "L",
	'..': "I",
	'..-': "U",
	'..-.': "F",
	'...': "S",
	'...-': "V",
	'....': "H",
	'.......':" "
  }