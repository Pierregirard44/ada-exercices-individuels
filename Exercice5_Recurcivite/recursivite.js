//-----------------------------------ETAPE 1-----------------------------------
const nums = [1, 2, 3]
//Code 1
function sum1(nums) {
    let sum = 0;
        for (let i = 0; i < nums.length; i ++) {
            sum += nums[i];
        }
    return sum
}
//Code 2
function sum1(nums) {
    let sum = 0;
        nums.forEach(num => sum += num)
    return sum
}
//Code 3
function sum1(numsArray) {
    return numsArray.reduce((total, num) => total + num)
}

console.log(sum1(nums))

//-----------------------------------ETAPE 2-----------------------------------
//Code 1
function sum2(numsArray) {
    if (numsArray.length == 1) {
      return  numsArray[0]
    }
    let firstE = numsArray.shift()
    return firstE + sum2(numsArray)
  }
  console.log(sum2(nums))

//Code 2
let tab = [3, 5, 9, 12, 1, 123]
    function sum2(array, i){
        if (i == array.length){
            return 0
        } else {
            return array[i] + sum2(array, i + 1)
        }
    }
    console.log(sum2(tab, 0))

//Code 3
let array2 = [1,2,3,4,5,6,7];
function sum2(array2, i){
    if (i !== 0){
      let tmp = sum2(array2, i-1)
      console.log(tmp)
      array2[i] += tmp
    }   
    console.log(array2)
    return array2[i]
}

console.log(sum2(array2, array2.length-1))

//-----------------------------------ETAPE 3-----------------------------------
function factorial(nombre){
    if (nombre === 0){
      return 1;
    }
    console.log(nombre)
    return nombre * factorial(nombre-1);
  }
console.log(factorial(3))

//-----------------------------------ETAPE 4-----------------------------------
//Code 1
// fonction suite de fibonacci pas récursive
function fibonacci(x){
    const sequenceArray = [0, 1];
    for(let i = 2; i <= x; i++){
      sequenceArray.push(sequenceArray[i - 1] + sequenceArray[i - 2]);
      console.log(sequenceArray);
    }
    return sequenceArray;
}
console.log(fibonacci(12))
  
//Code 2
// fonction suite de fibonacci récursive
function fibonacci(x){
    if (x <= 1){
        return [0, 1];
    } else {
      let sequenceArray = fibonacci(x - 1);
      console.log(sequenceArray)
      sequenceArray.push(sequenceArray[sequenceArray.length - 1] + sequenceArray[sequenceArray.length - 2]);
      return sequenceArray;
    }
}
console.log(fibonacci(12))