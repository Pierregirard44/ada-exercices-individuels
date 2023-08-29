const tableau = [1,2,3];
let somme1 = 0;
let somme2 = 0;

//étape 1
function sum1(tableau){
    for (i = 0; i < tableau.length; i++){
        somme1 += tableau[i];
    };
    console.log("sum1 : ",somme1);
};

sum1(tableau);

//étape 2
function sum2(tableau, i){
    if(i <= tableau.length){
      somme2 += tableau [i]; i++;
      sum2(tableau, i);
    } else {
      console.log("sum2 : ", somme2);
      return somme2;
    }
}

sum2(tableau);

//étape 3
function factorial(n){
    if (n === 0 || n === 1){
      return 1;
    } else {
      return n * factorial (n - 1);
    }
};

console.log("factorial : ", factorial(4));

//étape 4

function fibonacci (x) {
  let sommeF = [0,1];
  for (let i = 2; i < x; i++){
    sommeF.push(sommeF [i - 1] + sommeF [i - 2]);
    console.log(sommeF);
  }
  return sommeF;
}
console.log(fibonacci(10));

function fibonacci(x){
  if (x == 1){
    return [0, 1];
  } else {
    let sommeF = fibonacci(x - 1);
    console.log(sommeF)
    sommeF.push(sommeF[sommeF.length - 1] + sommeF[sommeF.length - 2]);
    return sommeF;
  }
}
console.log(fibonacci(10))