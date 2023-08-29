function getUserName(){
    let name = prompt("What is your name?");
    let greeting = `👋 Hello ${name}`;
    document.body.innerHTML += `<h2>${greeting}</h2>`;
};

function getUserAge(){
    let birthYear = prompt("What is your birth year?")
    let birthMonth = prompt("What is your birth month?(January is 1....December is 12)")
    birthMonthInt = parseInt(birthMonth)
    birthMonthInt = birthMonthInt - 1
    birthYearInt = parseInt(birthYear)
    let yearDate = new Date().getFullYear()
    let monthDate = new Date().getMonth()
    let currentAgeMonths = monthDate - birthMonthInt
    let currentAgeYears = yearDate - birthYear
    document.body.innerHTML += `<h3>Vous avez ${currentAgeYears} ans et ${currentAgeMonths} moins.</h3>`
};

getUserName();
getUserAge();
