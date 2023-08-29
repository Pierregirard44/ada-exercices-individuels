function maxDaysInMonth(month) {
    if (month === 2) {
          return 28;
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
          return 31;
    } else {
          return 30
    }
  }
  ​
  function isValidDate(str) {
      if (str.length != 10) {
        return false;
    }
      let dateArr = str.split('/');
    let dd = parseInt(dateArr[0]);
    let mm = parseInt(dateArr[1]);
    let yyyy = parseInt(dateArr[2]);
    if (mm > 12 || mm < 0) {
        return false;
    }
    let max = maxDaysInMonth(mm);
    if (dd > max || dd < 0) {
        return false;
    }
    return true;
  }
  ​
  function isPalindrome(value) {
      let baseArray = value.split('');
    let reversedArray = baseArray.slice(0).reverse(); //slice permet de faire une copie, le reverse() modifiant sinon l'array de départ
    if (reversedArray.join('') === baseArray.join('')) {
      return true;
    } else {
      return false;
    }
  }
  ​
  function isPalindromeDate(date) {
      if (isValidDate(date)) {
        let dateWithoutSlash = date.replace('/', '');
        return isPalindrome(dateWithoutSlash);
    } else {
        return false
    }
  }
  ​
  function incrementDate(date) {
      let dateArr = date.split('/');
    let dd = parseInt(dateArr[0]);
    let mm = parseInt(dateArr[1]);
    let yyyy = parseInt(dateArr[2]);
    if (dd < maxDaysInMonth(mm)) {
          dd+=1;
      let nextDay = ""+dd
      if (dd < 10) {
          nextDay = "0"+nextDay
      }
      return [nextDay, dateArr[1], dateArr[2]].join('/')
    } else {
        if (mm < 12) {
          mm+=1;
        let nextMonth = ""+mm
        if (mm < 10) {
          nextMonth = "0"+nextMonth
        }
        return ["01", nextMonth, dateArr[2]].join('/')
      } else {
          let nextYear = (yyyy+1)+""
          return ["01", "01", nextYear].join('/')
      }
    }
  }
  ​
  function getNextPalindromes(x) {
      let count = 0;
    let baseDate = '21/01/2022';
    do {
        if(isPalindromeDate(baseDate)) {
          console.log(baseDate);
        count+=1;
      }
      baseDate = incrementDate(baseDate);
    } while(count != x);
  }
  ​
  getNextPalindromes(8);




