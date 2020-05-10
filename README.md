# 🏆 Learning [javascript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

[Creado por Brendan Eich en Netscape](https://es.wikipedia.org/wiki/Brendan_Eich) |

🦜 Es un lenguaje script multi-paradigma, multiplataforma, basado en prototipos, dinámico, soporta estilos de programación funcional, orientada a objetos e imperativa.

> [🚀 Doc][📎 mdn](https://developer.mozilla.org/es/docs/Web/JavaScript) | [✨ Majo Apuntes](https://majoledesma.github.io/js-notes/)

✨**Características**

1. 🦜 **Interpretado**

2. 🦜 **[first-class functions](https://en.wikipedia.org/wiki/First-class_function)** (funciones de primera clase), por que trata a las funciones como ciudadanos de primera clase(firts class citiziens), es decir las funciones pueden pasarse cómo argumento a otras funciones, devolverse como return de otras funciones, asignar funciones a variables, ...

⚡ **Funciones de Orden Superior** funciones que toman otras funciones como argumentos o funciones que retornan una función.

- [🏆 Learning javascript](#-learning-javascript)
  - [🤩Variables](#variables)
    - [Tipos de datos y estructura de datos](#tipos-de-datos-y-estructura-de-datos)
      - [Tipo de datos primitivos](#tipo-de-datos-primitivos)
      - [Null](#null)
      - [Object](#object)
      - [Function](#function)
  - [✨ Casteo o conversión de tipos](#-casteo-o-conversión-de-tipos)
  - [✨ Ámbito de variable](#-Ámbito-de-variable)
    - [Global](#global)
    - [Local](#local)
  - [💡 Operadores](#-operadores)

## 🤩Variables

Contenedores donde se puede almacenar valores.
Los nombres de las variables se llaman identificadores.

🦜 todas las variables deben terminar en punto y coma (No es necesario pero recomendado);

🦜 Un identificador debe empezar por una letra, guión bajo o símbolo \$.

🦜 CaseSensitive (distigue mayusculas de minúsculas)

### Tipos de datos y estructura de datos

🦜 loosely typed or a dynamic language (Lenguaje dinámico) por que las variables no están asociadas directamente con un tipo de datos, sino que cualquier variable puede tener asignado y ser reasignado con cualquiera de los tipos de datos.

```javascript
let foo = 42; // number
foo = "bar"; // string
foo = true; // boolean
```

#### Tipo de datos [primitivos](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

Datos que no son [objetos](https://developer.mozilla.org/en-US/docs/Glossary/object) y no tienen [métodos](https://developer.mozilla.org/en-US/docs/Glossary/method) (propiedad de un objeto).

🦜 Podemos usar typeof para saber el tipo de dato

🦜 Un primitivo se puede reemplazar, pero no se puede alterar directamente (inmutable).

```javascript
// Primitivos son inmmutables
var bar = "baz";
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Un Array si es mutable
var foo = [];
console.log(foo); // []
foo.push("plugh");
console.log(foo); // ["plugh"]

// Pero si podemos reasignar un nuevo primitivo a una nueva variable
bar = bar.toUpperCase(); // BAZ
```

🦜 Todos los valores primitivos exepto `null` y `undefined` tienen equivalentes de objetos.

    🦜 String para string primitive
    🦜 Number para number primitive
    🦜 Bigint para bigint primitive
    🦜 Boolean para boolean primitive
    🦜 Symbol para symbol primitive

1. 🦜 **[undefined type](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)** Asignado automáticamente a variables que fueron recientemente declaradas(No tienen un Tipo de dato asignado).

2. 🦜 **[Boolean type](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)** `true` o `false`

3. 🦜 **Number type** números hasta (2^53) - 1

4. 🦜 **String type**

5. 🦜 **[BigInt type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)** número mayores a (2^53) - 1

```javascript
const theBiggestInt = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111"
);
// ↪ 9007199254740991n
```

- No puede usarse con `Math`

6. 🦜 **[Symbol type](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)** valor primitivo único e inmutable

#### Null

primitivo especial Caso especial para todos los objetos

#### Object

Valor en memoria que hace referencia a un identificador

#### Function

## ✨ Casteo o conversión de tipos

🦜 **ParseInt** Intenta convertir string a un valor numérico.

🦜 **ParseFloat** Convertir números a decimal

## ✨ Ámbito de variable

### Global

Variables declaradas fuera de una función. Disponibles Globalmente.

### Local

Variables declaradas dentro de una función. Solo están disponibles dentro de dicha función.

## 💡 Operadores
