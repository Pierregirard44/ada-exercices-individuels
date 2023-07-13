//-------------------ETAPE 1------------------------
const latinString = "Ola mundo"
//Code1
function getLatinCharacterList(string) {
	let array = []
	for (char of string) {
		array.push(char)
	}
	return array
}
//Code2
function getLatinCharacterList(string) {
	return string.split("")
}
console.log(getLatinCharacterList(latinString))
//-------------------ETAPE 2----------------------------
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
}
function translateLatinCharacter(char) {
	return latinToMorse[char]
}
//--------------------ETAPE 3-----------------------------
//Code1
function encode(text) {
	let morseArray = [];
	let characters = getLatinCharacterList(text)
	for (i = 0; i < characters.length; i++) {
		let character = characters[i];
		let morse = translateLatinCharacter(character)
		morseArray.push(morse)
	}
	return morseArray
}
//Code2
function encode(text) {
	let morseArray = [];
	let characters = getLatinCharacterList(text)
	for (character of characters) {
		let morse = translateLatinCharacter(character)
		morseArray.push(morse)
	}
	return morseArray
	//return morseArray.toString() => si on veut le reésultat en chaine de caractères
	//return morseArray.join(" ") => si on veut le résultat en chaine de caractère avec espace
}

encode("HELLOWORLD")