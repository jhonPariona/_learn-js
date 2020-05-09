/**
 * name var camelCase
 * declared return always
 * var declared dentro of function only
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
  $Rest Parameters return all arguments in Array
/*----------------------------------------------------------------------------*/

function name(...params) {
  console.log('🔥: name -> params', params);
  console.log('🔥: name -> params[1]', params[1]);
  return;
}

// name("Argument1", "Argument2", "Argument3")

