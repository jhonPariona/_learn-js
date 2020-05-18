/*----------------------------------------------------------------------------/*
    $Var
/*----------------------------------------------------------------------------*/
var declarationIdentificator; //declaration toma como valor por defecto undefined
console.log('🔥: declarationIdentificator', declarationIdentificator)
declarationIdentificator = "asignation";// asignación
console.log('🔥: declarationIdentificator', declarationIdentificator)

/*----------------------------------------------------------------------------/*
    $Let
/*----------------------------------------------------------------------------*/
let declarationIdentificicatorLet;
console.log('🔥: declarationIdentificicatorLet', declarationIdentificicatorLet) //undefined

declarationIdentificicatorLet = "asignation";
console.log('🔥: declarationIdentificicatorLet', declarationIdentificicatorLet)// asignation

/*----------------------------------------------------------------------------/*
    $Const
/*----------------------------------------------------------------------------*/
// const DECLARATION_IDENTIFICATOR; //error
const DECLARATION_IDENTIFICATOR = "asignation" //declaration y asignation juntos
console.log('🔥: DECLARATION_IDENTIFICATOR', DECLARATION_IDENTIFICATOR)
