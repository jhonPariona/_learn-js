"use strict";
/**
 * Conj de acciones de forma secuencias
 * Un único hilo (ejecuta en forma secuencial)
 * identificadores de functions en camelCase
 * identificadores en english
 */

/*----------------------------------------------------------------------------/*
    $RestParameter
/*----------------------------------------------------------------------------*/
/**
 * podemos acceder a todos los parámeros que nos pasen
 */
function restParameter(...params) {
    console.log('🔥: restParameter -> params', params)
}

restParameter("argument 1", "argument2", "argument 3") //[ 'argument 1', 'argument2', 'argument 3' ]

/*----------------------------------------------------------------------------/*
    $ReturnValue
/*----------------------------------------------------------------------------*/
/**
 * retorna valores sino retorna undefined por defecto
 * buena práctica siempre declarar los return
 * lo que se declare despues de return no se ejecutará
 */

 function returnValue() {
     console.log("Hello");
     return 0;
     console.log("Yo esty después"); //lgtm [js/unreachable-statement]
 }

 console.log(returnValue()); //Hello undefined (hello es lo que imprime la fx y undefined es lo que retorna dicha fx)


 /*----------------------------------------------------------------------------/*
     $FunctionDeclaration
 /*----------------------------------------------------------------------------*/
/**
 * Los parámetros funciona para todos los tipos de funciones
 * podemos declarar cuantos parámetros queramos
 * podemos pasarle cuantos parámetros queramos
 */
function helloWorld(parm1, param2, param3) {
    console.log('🔥: helloWorld -> param3', param3) //undefined
    console.log('🔥: helloWorld -> param2', param2)  //argumento 2
    console.log('🔥: helloWorld -> parm1', parm1) //argumento 1
    console.log("Hello, world");  //Hello, world
}

helloWorld("argumento 1", "argumento 2");

/*----------------------------------------------------------------------------/*
    $FunctionAnon
/*----------------------------------------------------------------------------*/
let identificatorFunctionAnon = function () {
    console.log("Hello World Anon");
}

identificatorFunctionAnon()

