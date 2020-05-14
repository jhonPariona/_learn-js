"use strict";
/**
 * Agrupa datos forma clave valor
 * NO IMPORTA EL ORDEN
 * CLAVES DEBEN SER ÚNICAS
 */

 let nameDictionary = {
   clave: "valor",
   clave: "valor ultimo"
 }
 // console.log('🔥: nameDictionary', nameDictionary)

 /*----------------------------------------------------------------------------/*
 $IntroducirValores
 /*----------------------------------------------------------------------------*/
 nameDictionary['clave_1'] = "valor"
 // console.log('🔥: ADD value', nameDictionary)

 //  notacion punto
 nameDictionary.clave_2 = "valor"
 // console.log('🔥: ADD value dot notation', nameDictionary)


/*----------------------------------------------------------------------------/*
  $Iterar
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------/*
  $ForIn
/*----------------------------------------------------------------------------*/
for(let key in nameDictionary){
  // console.log('🔥: key =>', key);
  // console.log('🔥: value =>', nameDictionary[key]);
}

/*----------------------------------------------------------------------------/*
  $ObjectKeys
/*----------------------------------------------------------------------------*/
/**
 * Antes era usado
 */
let keys = Object.keys(nameDictionary);
// console.log('🔥: keys =>', keys)

// algoritmo del object.keys
function getKeys(dictionary) {
  let aux = [];

  for (const key in dictionary) {
    aux.push(key)
  }

  return aux;
}
let keysAlg = getKeys(nameDictionary);
// console.log('🔥: keysAlg', keysAlg)


//usar foreach con objet.keys
Object.keys(nameDictionary).forEach(function (key) {
  // console.log('🔥: key =>', key);
  // console.log('🔥: value =>', nameDictionary[key]);
})

//usando arrow function
// Object.keys(nameDictionary).forEach((key)=>console.log('🔥: key =>', key));


/*----------------------------------------------------------------------------/*
  $Exercises
/*----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------/*
  $IngresarPropiedades
/*----------------------------------------------------------------------------*/
let dataUser = {
  name: "jhon",
  apellido: "pariona",
  direccion: {
    calle: "av los san antonios",
    numero: 400
  }
}

function saludar(data) {
  let msg = `Hola ${data.name} ${data.apellido}, vives en ${data.direccion.calle} N° ${data.direccion.numero} `
  return msg
}
// console.log('🔥: saludar ->', saludar(dataUser))

function countProperties(data) {
  let count = 0;
  for(let key in data){
    count++
  }
  return count;
}
// console.log('🔥: countProperties ->', countProperties(dataUser))

/*----------------------------------------------------------------------------/*
  $CombinarDiccionarios
/*----------------------------------------------------------------------------*/
let dict1 = {
  name:"sergio"
}

let dict2={
  surname:"Fernandez"
}

function joinDictionary(dictionary1, dictionary2) {
  let newDictionary = {};

  for(let key in dictionary1){
    newDictionary[key] = dictionary1[key];
  }
  for(let key in dictionary2){
    newDictionary[key] = dictionary2[key];
  }
  return newDictionary;
}

//console.log(joinDictionary(dict1, dict2));


/*----------------------------------------------------------------------------/*
  $PiedraPapelTijera
/*----------------------------------------------------------------------------*/

function winPlay(player1, player2) {
  let winner = '';

  let winRules = {piedra:"tijera", papel:"piedra", tijera:"papel"}

  if(player1 === player2){
    winner = 'Empate'
  }else if(player2 === winRules[player1]){
    winner = 'player 1'
  } else{
    winner = 'player 2'
  }

  return winner;
}

// console.log(winPlay("tijera", "papel"));
