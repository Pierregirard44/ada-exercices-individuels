function askName () {
    let name = prompt("What's your name bro?");
    let introName = `<h2> Bonjour ${name} ! </h2>`
    document.body.innerHTML += introName
}
askName()

function askBirthYear () {

    let aujd = new Date();
    let year = aujd.getFullYear();
    let mnth = aujd.getUTCMonth() + 1;
    let day = aujd.getUTCDate();

    let phraseDate = "<h3>" + "La date du jour p'tit chat! On est le " + day + "/" + mnth + "/" + year + "</h3>"

    let annee = prompt("What's your year of birth dude?","yyyy") 
    let ageInf = year - annee - 1

    let popMois = prompt ("Quel mois t'as vu pousser ton premier cri?", "janvier,février,mars...,décembre")
    let month = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]
    let monthInf = ageInf*12 + mnth
    let age = Math.floor(monthInf/12)
    let numMonth = month.indexOf(popMois) + 1
    let moisDef = 12 - numMonth + mnth
    let mois = age*12 + moisDef
    let moisDefDef = 0
    let ageDef = 0
        if  (moisDef > 11 ) {
            let moisDefDef = moisDef - 12
            let ageDef = age + 1
            let pharseAge = '<h3>' + 'Ta vieillerie est de ' + ageDef + ' ans ' + 'et ' + moisDefDef + ' mois' + '</h3>'
    let phraseMois = "<h3>" + "Votre âge Petit Bateau c'est " + mois + " mois" + "</h3>" 

    document.body.innerHTML += phraseDate
    document.body.innerHTML += pharseAge
    document.body.innerHTML += phraseMois
        } else {
            let moisDefDef = moisDef
            let ageDef = age
            let pharseAge = '<h3>' + 'Ta vieillerie est de ' + ageDef + ' ans ' + 'et ' + moisDefDef + ' mois' + '</h3>'
            let phraseMois = "<h3>" + "Votre âge Petit Bateau c'est " + mois + " mois" + "</h3>" 
        
            document.body.innerHTML += phraseDate
            document.body.innerHTML += pharseAge
            document.body.innerHTML += phraseMois
        }

}
askBirthYear()