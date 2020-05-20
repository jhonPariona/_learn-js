"use strict";

/*----------------------------------------------------------------------------/*
  $contar num posit lista numbers
/*----------------------------------------------------------------------------*/
console.log("--------------------contar posi--------------------------------");

let listNumbers = [1, 2, 3, 5, -6, 10]

function countNumberPositives(arrayNumbers) {
  let count = 0;

  for (let index = 0, endIndex = arrayNumbers.length; index < endIndex; index++) {
    const element = arrayNumbers[index];
    if (element > 0) {
      count++;
    }
  }

  return count;
}

let result = countNumberPositives(listNumbers);
console.log('🔥: result count number positives in array', result)


/*----------------------------------------------------------------------------/*
  $divisible for 2
/*----------------------------------------------------------------------------*/
console.log("--------------------divisible por 2--------------------------------");
listNumbers = [2, 4, 6, 7, 9]
function countDivisibleTwo(arrayNumbers) {
  let count = 0;

  for (let index = 0, endIndex = arrayNumbers.length; index < endIndex; index++) {
    const element = arrayNumbers[index];
    if (element > 0 && element % 2 === 0) {
      console.log('🔥: countDivisibleTwo -> element', element)
      count++;
    }
  }

  return count;
}


let resultCountDivisible = countDivisibleTwo(listNumbers)
console.log('🔥: resultCountDivisible', resultCountDivisible)


/*----------------------------------------------------------------------------/*
  $returnBoolean
/*----------------------------------------------------------------------------*/
console.log("--------------------return first Boolean--------------------------------");

listNumbers = [1, -2, -5, 7, 6, 8, false, true, false,true, null]

function returnBoolean(array) {
  for (let index = 0, endIndex = array.length; index < endIndex; index++) {
    const element = array[index];
    if (typeof element === "boolean") {
      return element;
    }
  }

}

const resultReturnBoolean = returnBoolean(listNumbers);
console.log('🔥: resultReturnBoolean', resultReturnBoolean)


/*----------------------------------------------------------------------------/*
  $ReturnOPuestos
/*----------------------------------------------------------------------------*/
console.log("--------------------Return OPuestos--------------------------------");
listNumbers = [1, -2, -5, 7, 6, 8]

function returnOpuestos(arrayNumbers) {
  let arrayOpuestos = [];

  for (let index = 0, endIndex = arrayNumbers.length; index < endIndex; index++) {
    const elementOpuesto = - arrayNumbers[index];
    arrayOpuestos.push(elementOpuesto);
  }

  return arrayOpuestos;
}

const resultOPuestos = returnOpuestos(listNumbers);
console.log('🔥: resultOPuestos', resultOPuestos)
