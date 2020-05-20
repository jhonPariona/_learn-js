"use strict";
/*----------------------------------------------------------------------------/*
    $ScopeGlobal
/*----------------------------------------------------------------------------*/
/**
 * Todo lo que se declara fuera de una function
 * puede ser accedida desde cualquier lugar que este después de la declaración(
 * puede ser accedida desde cualquiera de sus hijos(GLOBAL))
 */

var vardeclarationGlobal = "var Global";
let letdeclarationGlobal = "let Global";
const constdeclarationGlobal = "const Global";

console.log("---------------------fuera function ---------------------------");

console.log('🔥: declarationGlobal', vardeclarationGlobal)
console.log('🔥: declarationGlobal', letdeclarationGlobal)
console.log('🔥: declarationGlobal', constdeclarationGlobal)


function nameFunction() {
    console.log("---------------------dentro function ---------------------------");
    console.log('🔥: declarationGlobal', vardeclarationGlobal)
    console.log('🔥: declarationGlobal', letdeclarationGlobal)
    console.log('🔥: declarationGlobal', constdeclarationGlobal)
}
nameFunction()

if (true) {
    console.log("---------------------dentro bloque if ---------------------------");
    console.log('🔥: declarationGlobal', vardeclarationGlobal)
    console.log('🔥: declarationGlobal', letdeclarationGlobal)
    console.log('🔥: declarationGlobal', constdeclarationGlobal)
}

for (var i = 0; i<1 ; i++){
    console.log("---------------------dentro bloque for ---------------------------");
    console.log('🔥: declarationGlobal', vardeclarationGlobal)
    console.log('🔥: declarationGlobal', letdeclarationGlobal)
    console.log('🔥: declarationGlobal', constdeclarationGlobal)
}


/*----------------------------------------------------------------------------/*
    $ScopeFunction
/*----------------------------------------------------------------------------*/
/**
 * lo declarado dentro de la function únicamente es accedida dentro de la function
 * y tbn puede ser accedida por sus hijos que están dentro function(funciones bloques)
 */

function scopeFunction() {
    var varFunction = "varFunction"
    let letFunction = "letFunction"
    const constFunction = "constFunction"

    console.log("---------------------dentro function ---------------------------");
    console.log('🔥: scopeFunction -> varFunction', varFunction)
    console.log('🔥: scopeFunction -> letFunction', letFunction)
    console.log('🔥: scopeFunction -> constFunction', constFunction)

    function functionDentro() {
        console.log("---------------------dentro function hijo---------------------------");
        console.log('🔥: scopeFunction -> varFunction', varFunction)
        console.log('🔥: scopeFunction -> letFunction', letFunction)
        console.log('🔥: scopeFunction -> constFunction', constFunction)
    }
    functionDentro()
}

// varFunction is not defined si llamamos desde aqui fuera no se puede acceder a las variables
/* * console.log('🔥: scopeFunction -> varFunction', varFunction)
console.log('🔥: scopeFunction -> letFunction', letFunction)
console.log('🔥: scopeFunction -> constFunction', constFunction) * */

scopeFunction()


/*----------------------------------------------------------------------------/*
    $ScopeBloque if for while
/*----------------------------------------------------------------------------*/
/**
 * las variables let y const pueden ser accedidas desde sus hijos son declaradas dentro del bolue
 * let y const cumplen este escope mientras que
 *
 * var no cumple el scope de bloque para el es como si fuera un scope global
 */

if (true) {
    var varBloque = "varBloque";
    let letBloque = "letBloque";
    const constBloque = "constBloque";

    console.log("---------------------dentro Bloque---------------------------");
    console.log('🔥: varBloque', varBloque)
    console.log('🔥: letBloque', letBloque)
    console.log('🔥: constBloque', constBloque)

    function name() {
        console.log("---------------------dentro Bloque dentro de una function---------------------------");
        console.log('🔥: varBloque', varBloque)
        console.log('🔥: letBloque', letBloque)
        console.log('🔥: constBloque', constBloque)
    }
    name()
}

console.log("---------------------fuera Bloque---------------------------");
console.log('🔥: varBloque', varBloque) //si normal se puede llamar ya que no tiene scope de bloque es como si fuera global
/* console.log('🔥: letBloque', letBloque) //not defined
console.log('🔥: constBloque', constBloque) //not defined */
