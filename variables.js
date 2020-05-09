// cSpell:disable

/**
 * no se declara el tipo de variable (tipado dinámico o debil)
 *
 * */

var var_declaracion;
var_declaracion = "asignación";

let declaracion_let;
declaracion_let = "asignación";

const CONST_DECLARATION = "asignación";


/*----------------------------------------------------------------------------/*
  $Scope Global
/*----------------------------------------------------------------------------*/
/**
 * Si una variable es declarada en un ámbito global puede ser accedida de manera global
 */
// #region scopeGlobal

 var var_global = "var global"
 let let_global = "let global"
 const const_global = "const global"

 if (true) {
  // // // // console.log('🔥: var_global', var_global);
  // // // // console.log('🔥: let_global', let_global);
  // // // // console.log('🔥: const_global', const_global);
}

for (let index = 0; index < 1; index++) {
  // // // // console.log('🔥: var_global', var_global);
  // // // // console.log('🔥: let_global', let_global);
  // // // // console.log('🔥: const_global', const_global);

}

function name() {
  // // // // console.log('🔥: var_global', var_global);
  // // // // console.log('🔥: let_global', let_global);
  // // // // console.log('🔥: const_global', const_global);
}

name()
// #endregion



/*----------------------------------------------------------------------------/*
  $SCOPE BLOQUE
/*----------------------------------------------------------------------------*/
/**
 * Var no respeta el scope de bloque y lo toma como si fuera global
 */
//#region ScopeBloque
if (true) {
  var var_bloque = "var bloque";
  let let_bloque = "let bloque";
  const const_bloque = "const bloque";

  // // // console.log('🔥: var_bloque', var_bloque);
  // // // console.log('🔥: let_bloque', let_bloque);
  // // // console.log('🔥: const_bloque', const_bloque);

}

// // // console.log('🔥: var_bloque', var_bloque);
// // console.log('🔥: let_bloque', let_bloque); //let_bloque is not defined
// // console.log('🔥: const_bloque', const_bloque); //const_bloque is not defined

function nameBloque() {
  // console.log('🔥: var_bloque', var_bloque);
  // // console.log('🔥: let_bloque', let_bloque); //let_bloque is not defined
  // // console.log('🔥: const_bloque', const_bloque); //const_bloque is not defined
}

nameBloque();
//#endregion





/*----------------------------------------------------------------------------/*
  $ScopeFunction
/*----------------------------------------------------------------------------*/
/**
 * El scope de function las variables declaradas dentro de una funcion solo son
 * accesibles dentro de esa función
 */

 //#region ScopeFunction

function namefunction() {
  var var_function = "var function";
  let let_function = "let function";
  const const_function = "const function";

  // console.log('🔥: var_function', var_function);
  // console.log('🔥: let_function', let_function);
  // console.log('🔥: const_function', const_function);
}

namefunction();


if (true) {
  // console.log('🔥: var_function', var_function); // var_function is not defined
  // console.log('🔥: let_function', let_function); //let_function is not defined
  // console.log('🔥: const_function', const_function); //const_function is not defined

}

// console.log('🔥: var_function', var_function); // var_function is not defined
// console.log('🔥: let_function', let_function); //let_function is not defined
// console.log('🔥: const_function', const_function); //const_function is not defined

//#endregion










/*----------------------------------------------------------------------------/*
  $UNDEFINED. Lo declaramos pero no inicializamos
/*----------------------------------------------------------------------------*/
let undefined_declaration;
// // // // console.log("🔥: undefined_declaration", undefined_declaration);




/*----------------------------------------------------------------------------/*
  $Null
/*----------------------------------------------------------------------------*/
let declaracion_asignacion_null = null;
// // // // console.log("🔥: declaracion_asignacion_null", declaracion_asignacion_null);



/*----------------------------------------------------------------------------/*
  $Number
/*----------------------------------------------------------------------------*/
let valorNumber = 5;






/*----------------------------------------------------------------------------/*
  $String
/*----------------------------------------------------------------------------*/
let var_string = "valor del string";





/*----------------------------------------------------------------------------/*
  $Boolean
/*----------------------------------------------------------------------------*/
let var_bool = true;
var_bool = false;

