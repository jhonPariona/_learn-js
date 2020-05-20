"use strict";

/*----------------------------------------------------------------------------/*
  $INDICE
/*----------------------------------------------------------------------------*/
/**
 * Length --------------------------------------- Obtener el tamaño del array
 * Push ----------------------------------------- Añade elemento al final
 * Pop ------------------------------------------ Elimina un elemento del final
 * Imprimir-------------------------------------- Imprimir valores de un array
 * ContieneElemento------------------------------ Verificar si un elemento esta en un array
 * ArrayObkect----------------------------------- Verificar si existe el valor de un array de objetos
 * IterarArray ---------------------------------- Iterar en los elementos de un array
 */


/*----------------------------------------------------------------------------/*
  $Length
/*----------------------------------------------------------------------------*/
console.log("----------------------- Length---------------------------------");
let arrayIdentificator = ["String", 20, true, undefined, null, NaN]

const lengthAray = arrayIdentificator.length /* 6 */
console.log('🔥: lengthAray', lengthAray)




/*----------------------------------------------------------------------------/*
  $Push
/*----------------------------------------------------------------------------*/
console.log("----------------------- Push---------------------------------");
arrayIdentificator.push("new Elemnet")
arrayIdentificator.push("2 new element")
console.log('🔥: arrayIdentificator push =>', arrayIdentificator)



/*----------------------------------------------------------------------------/*
  $Pop
/*----------------------------------------------------------------------------*/
console.log("----------------------- Pop---------------------------------");
arrayIdentificator.pop()

console.log('🔥: arrayIdentificator.pop()', arrayIdentificator)





/*----------------------------------------------------------------------------/*
  $Imprimir
/*----------------------------------------------------------------------------*/
console.log("----------------------- Imprimir---------------------------------");

var declarationArrayIdentificator = ["string1", "string2"]

console.log('🔥: declarationArrayIdentificator =>', declarationArrayIdentificator) /* [ 'string1', 'string2' ] */
console.log('🔥: declarationArrayIdentificator join =>', declarationArrayIdentificator.join(" ")) /* string1 string2 */





/*----------------------------------------------------------------------------/*
  $ContieneElemento
/*----------------------------------------------------------------------------*/
console.log("----------------------- ContieneElemento---------------------------------");

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
console.log("----------------------- ArrayObjects---------------------------------");
const arrayObjects = [
  {
    name: "js"
  },{
    name: "css"
  }]
const isSome = arrayObjects.some(objectCh => objectCh.name === "css");
console.log('🔥: isSome', isSome) /* True */


/*----------------------------------------------------------------------------/*
  $IterarArray
/*----------------------------------------------------------------------------*/
console.log("----------------------- ITERAR ARRAY ---------------------------------");



arrayIdentificator = ["String", 20, true, undefined, null, NaN]

/* for */
for (let index = 0, endIndex = arrayIdentificator.length; index < endIndex; index++) {
  const element = arrayIdentificator[index];
  console.log('🔥: element fror arrayIdentificator =>', element)
}
