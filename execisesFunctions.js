/*----------------------------------------------------------------------------/*
    Hacer una function que sume dos num y retorne el resultad
/*----------------------------------------------------------------------------*/
function sumaNumeros(num1, num2) {
    return num1 + num2
}
console.log('🔥: sumaNumeros -> 5 + 4 =>', sumaNumeros(5, 4))

/*----------------------------------------------------------------------------/*
    Hacer una function concatene dos cadenas
/*----------------------------------------------------------------------------*/
function concatCadena(string1, string2) {
    return string1 + string2;
}
console.log('🔥: concatCadena -> "hola" "mundo" =>', concatCadena("hola","mundo"))

/*----------------------------------------------------------------------------/*
    Function que devuelva true o false si un numero es mayor que otro
/*----------------------------------------------------------------------------*/

function numberMayor(numberMayor, numberMenor) {
    if(numberMayor > numberMenor){
        return true;
    }else{
        return false;
    }
}
console.log('🔥: numberMayor -> numberMayor(5, 3)', numberMayor(5, 3))
console.log('🔥: numberMayor -> numberMayor(3, 5)', numberMayor(3, 5))


/*----------------------------------------------------------------------------/*
    Function return min of two numbers
/*----------------------------------------------------------------------------*/

function minNUmbers(num1, num2) {
    if (num1 < num2) {
        return num1;
    }else{
        return num2;
    }
}
console.log('🔥: minNUmbers -> minNUmbers(3, 5)', minNUmbers(3, 5))
console.log('🔥: minNUmbers -> minNUmbers(20, 10)', minNUmbers(20, 10))
