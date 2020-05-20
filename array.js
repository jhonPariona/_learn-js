"use strict";

/*----------------------------------------------------------------------------/*
  $INDICE
/*----------------------------------------------------------------------------*/
/**
 * Imprimir-------------------------------------- Imprimir valores de un array
 * ContieneElemento------------------------------ Verificar si un elemento esta en un array
 * ArrayObkect----------------------------------- Verificar si existe el valor de un array de objetos
 */


/*----------------------------------------------------------------------------/*
  $Imprimir
/*----------------------------------------------------------------------------*/
var declarationArrayIdentificator = ["string1", "string2"]

console.log(declarationArrayIdentificator); /* [ 'string1', 'string2' ] */
console.log(declarationArrayIdentificator.join("\n")); /* string1 string2*/

/*----------------------------------------------------------------------------/*
  $ContieneElemento
/*----------------------------------------------------------------------------*/

const arrayDeclatation = ["🎁", "🔥", 200, undefined, null, NaN]

/* Includes Nuevos browsers CASESENSITIVE*/
const isIncludes = arrayDeclatation.includes("🎁")
console.log('🔥: isIncludes', isIncludes) /* true */



/* indexOf browser antiguos CASESENSITIVE*/
const isIndexOf = arrayDeclatation.indexOf("🔥") !== -1
console.log('🔥: isIndexOf', isIndexOf) /* true */




/* Tener cuidado al usar NaN */
const includesNaN = arrayDeclatation.includes(NaN)
console.log('🔥: includesNaN', includesNaN) /* True */
const indexOfNaN = arrayDeclatation.indexOf(NaN) !== -1
console.log('🔥: indexOfNaN', indexOfNaN) /* False */




/*----------------------------------------------------------------------------/*
  $ArrayObjects
/*----------------------------------------------------------------------------*/
const arrayObjects = [
  {
    name: "js"
  },{
    name: "css"
  }]
const isSome = arrayObjects.some(objectCh => objectCh.name === "css");
console.log('🔥: isSome', isSome) /* True */
