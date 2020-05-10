/**
 * name var camelCase
 * declared return always
 * var declared in of function only
 * */

function nameFunction(params) {
  console.log('🔥: nameFunction -> params', params);
  return params; /* return is optional*/
}

//nameFunction("Argument");
/*----------------------------------------------------------------------------/*
  $Function anonym called after declared
/*----------------------------------------------------------------------------*/

let nameFunctionAnon = function (params) {
  console.log('🔥: nameFunctionAnon -> params', params);
  return params;
}
//nameFunctionAnon("Argument");


/*----------------------------------------------------------------------------/*
  $ArrowFunctions
/*----------------------------------------------------------------------------*/
/**
 * syntax sugar
 */

let nameArrowFunctions = (params)=>{
  console.log('🔥: nameArrowFunctions -> params', params)
  return params;
}

// return direct
let nameArrowFunctionInLine = (params)=>console.log('🔥: params', params);

// nameArrowFunctions("Argument");
// nameArrowFunctionInLine("Arguments")





/*----------------------------------------------------------------------------/*
  $Rest Parameters return all arguments in Array
/*----------------------------------------------------------------------------*/

function name(...params) {
  console.log('🔥: name -> params', params);
  console.log('🔥: name -> params[1]', params[1]);
  return;
}

// name("Argument1", "Argument2", "Argument3")



/*----------------------------------------------------------------------------/*
  $PureFunctions
/*----------------------------------------------------------------------------*/
/**
 * cSpell:disable
 *
 * Fx que siempre que se pase un valor devuelve los mismos resultados.
 *
 * cSpell:enable
 */
