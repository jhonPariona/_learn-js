/**
 * las declaraciones de variables son hoisted, es decir lleva la
 * declaración(no la asignación) al inicio del contexto.
 *
 * Parece que solo es para var
 */

 function nameFx() {
   console.log(pinto);
   var pinto = 5;
 }

nameFx(); //undefined

 /**
  * Lo que javascript hace es:
  */
/*
 function nameFx() {
  var pinto;
  console.log(pinto);
  pinto = 5;
}
*/

