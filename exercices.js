/*----------------------------------------------------------------------------/*
  $RangeIncrementAndDecremet
/*----------------------------------------------------------------------------*/
function range(start, end, step=1) {
  let result = [];

  if(step > 0){
    for(let i = start; i <= end; i += step){
      result.push(i)
    }
  }else{
    for(let i = start; i >= end; i += step){
      result.push(i)
    }
  }

  return result
}

// incrment
let resultIncrement = range(2, 10, 2);
console.log('🔥: resultIncrement', resultIncrement)// [ 2, 4, 6, 8, 10 ]

// decrement
let resultDecrement = range(10, 5, -1)
console.log('🔥: resultDecrement', resultDecrement) //[ 10, 9, 8, 7, 6, 5 ]


/*----------------------------------------------------------------------------/*
  $SumaElementos Array
/*----------------------------------------------------------------------------*/

let numbers = [-1, 1, 5];

function sumArray(arrayNumbers) {
  let resultSuma = 0;

  for(ch in arrayNumbers) {
    resultSuma += arrayNumbers[ch]
  };

  return resultSuma;
}

let result = sumArray(numbers);
console.log('🔥: result', result)

let resultSumRange = sumArray(range(1,5)); //🔥: result 5
console.log('🔥: resultSumRange', resultSumRange) //🔥: resultSumRange 15
