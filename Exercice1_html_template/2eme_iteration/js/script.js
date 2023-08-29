//Fonction pour demander le nom de l'utilisateur
function askName () {
    let name = prompt ("Je me présente, je suis la seconde itération de l'exercice individuel 1 : I HTML_Template, quel est ton nom?","");
    let hello = `<h2>Bonjour ${name} ! Ravi de faire ta connaissance.</h2><h2>Maintenant que l'on c'est présenté peux-tu me donner ta date de naissance?`;
    document.body.innerHTML += hello;
    return name;
}
askName ()

//Fonction pour récupérer la date du jour
let year = 0;
let month = 0;
let day = 0;
function getDate() {
    let today = new Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
    day = today.getDate();
}
getDate();
console.log(day); 
console.log(month); 
console.log(year);

//Fonction pour demander l'âge de l'utilsateur
function askBirth () {
    let dateUser = '<h2><label for="birth">Date de naissance :</label> <input type="date" id="birth" name="birthdate" /> <input type="button" value="Valider" onclick="getUserBirth();displayAge();" /></h2>';
    document.body.innerHTML += dateUser
}
askBirth()

//Fonction récupération de l'input birth
let input = 0;
let userDay = 0;
let userMonth = 0;
let userYear = 0;
function getUserBirth() {
    input = document.getElementById("birth").value;
    let splitUserBirth = input.split("-");
    userDay = parseInt(splitUserBirth[2]);
    userMonth = parseInt(splitUserBirth[1]);
    userYear = parseInt(splitUserBirth[0]);
    console.log (userDay);
    console.log (userMonth);
    console.log (userYear);
};

//Récupération de l'âge pour afficher les années
let userAge = 0;
function displayAge () {
    if ((month - userMonth)>0) {
        userAge = year - userYear;
    } else if ((month - userMonth)>0) {
        userAge = year - userYear - 1;
    } else if (month === userMonth){
        if ((day - userDay)<0) {
            userAge = year - userYear - 1;
        } else {
            userAge = year - userYear;
        }
    } ;
    console.log(userAge);
    let ageYear = `<h2> Je vois que tu as ${userAge} ans ! Veux-tu être plus précis dans ton âge?</h2>`;
    let suite = `<h2><input type="button" value="Bien sûr!" onclick="nextAnswer();" /><input type="button" value="Pas trop..." onclick="dontContinue();" /></h2>`;
    document.body.innerHTML += ageYear;
    document.body.innerHTML += suite;
}

//Fonction si on ne continue pas
function dontContinue () {
    let stopProg = `<h2> On reprendra plus tard alors. Bonne continuation !</h2>`;
    document.body.innerHTML += stopProg;
}

//Fonction pour afficher le résultat avec les mois
function nextAnswer () {
    let monthGap = 0;
    if ((month - userMonth)>0) {
        if ((day - userDay)<0) {
            monthGap = month - userMonth - 1;
        } else {
            monthGap = month - userMonth;
        }
    } else if ((month - userMonth)<0) {
        monthGap = month - userMonth + 12;
    } else if ((month === userMonth)) {
        if ((day - userDay)<0) {
            monthGap = 11;
        } else {
            monthGap = 0;
        }
    } ;
    let totalMonth = (userAge * 12) + monthGap;
    console.log(monthGap);
    let ending = `<h2> Pour être plus précis alors tu as exactement ${totalMonth} mois.</h2>
        <h2>Ou plus simplement ${userAge} ans et ${monthGap} mois.</h2>
        <h2>Merci d'avoir fait connaissance avec moi en tout cas.</h2>`;
    document.body.innerHTML += ending;
};
