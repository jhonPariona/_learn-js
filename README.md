# 🏆 Learning [javascript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/jhonPariona/_learn-js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jhonPariona/_learn-js/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/jhonPariona/_learn-js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jhonPariona/_learn-js/context:javascript)

> [🚀 Doc][📎 mdn](https://developer.mozilla.org/es/docs/Web/JavaScript) | [✨ Majo Apuntes](https://majoledesma.github.io/js-notes/)

[Creado por Brendan Eich en Netscape](https://es.wikipedia.org/wiki/Brendan_Eich) |

🦜 Primero se llamo **Mocha**, luego **LiveScript** despues **JavaScript**

✨**Características**

- 🦜 **[funciones como ciudadanos de primera clase](https://en.wikipedia.org/wiki/First-class_function)** (firts class citiziens), Las funciones pueden pasarse cómo argumento a otras funciones, devolverse como return de otras funciones, asignar funciones a variables, ...

- 🦜 **loosely typed or a dynamic language** (Lenguaje dinámico) por que las variables no están asociadas directamente con un tipo de datos, sino que cualquier variable puede tener asignado y ser reasignado con cualquiera de los tipos de datos.

  ```javascript
  let foo = 42; // number
  foo = "bar"; // string
  foo = true; // boolean
  ```

⚡ **Funciones de Orden Superior** funciones que toman otras funciones como argumentos o funciones que retornan una función.

<details>
<summary>📜 Indice</summary>
<ul>
<li><a href="#-learning-javascript">🏆 Learning javascript</a>


<ul>
<li><a href="#-buenas-prácticas">✨ Buenas Prácticas</a></li>

<li><a href="#variables">🤩Variables</a></li>

<li><a href="#-Ámbito-de-variable">✨ Ámbito de variable</a></li>

<li><a href="#global">Global</a></li>

<li><a href="#local">Local</a></li>

<li><a href="#bloque-es6">Bloque es6</a></li>

<li><a href="#-tipos-de-datos-y-estructura-de-datos">🦊 Tipos de datos y estructura de datos</a>


<ul>
<li><a href="#tipo-de-datos-primitivos">Tipo de datos primitivos</a></li>

<li><a href="#null">Null</a></li>

<li><a href="#object">Object</a></li>

<li><a href="#function">Function</a></li></ul>
</li>

<li><a href="#-casteo-o-conversión-de-tipos">✨ Casteo o conversión de tipos</a></li>

<li><a href="#-operadores">💡 Operadores)</a></li>

<li><a href="#incremento">Incremento</a></li>

<li><a href="#decremento">Decremento</a></li>

<li><a href="#unario-">Unario +</a></li>

<li><a href="#unario--">unario -</a></li></ul>
</li>
</ul>
</details>

## ✨ Buenas Prácticas

🦜 Usar siempre al inicio `"use strict";`

🦜 todas las variables deben terminar en punto y coma (No es necesario pero recomendado);

🦜 Un identificador debe empezar por una letra, guión bajo o símbolo \$.

🦜 **CaseSensitive** (distigue mayusculas de minúsculas)

🦜 usar **camelCase** para los identificadores(RECOMENDADO)

## 🤩Variables

🦜 La **asignación** siempre va de **derecha a izquierda**. Todo a la derecha del `=` operador se resuelve antes de asignar el valor a la variable.

🦜 Los **nombres** de las variables se llaman **identificadores**.

🦜 Cuando se **declaran** las variables tienen un **valor inicial de undefined**.

🦜 Si realiza una **operación matemática** con **undefined**, su resultado será lo **NaN** que significa "No es un número" .

🦜 Si **concatena** una **cadena con una undefined**, obtendrá una **cadena literal con "undefined"**.

🦜 Las variables var en js son [hoisted(hosting)](hoisting.js) (**Al parecer solo aplica a var**)

## ✨ Ámbito de variable

### Global

Variables declaradas fuera de una función. Disponibles Globalmente.

### Local

Variables declaradas dentro de una función. Solo están disponibles dentro de dicha función.

### Bloque es6

variables Let y const declaradas dentro de `{ }` solo están visible dentro de dichos bloques

---

### 🦊 Tipos de datos y estructura de datos

#### Tipo de datos [primitivos](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

Datos que no son [objetos](https://developer.mozilla.org/en-US/docs/Glossary/object) y no tienen [métodos](https://developer.mozilla.org/en-US/docs/Glossary/method) (propiedad de un objeto).

🦜 Podemos usar `typeof` para saber el tipo de dato

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

1. 🦜 **[undefined type](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)** Asignado automáticamente a variables que fueron recientemente declaradas(No tienen un Tipo de dato asignado).

2. 🦜 **[Boolean type](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)** `true` o `false`

3. 🦜 **Number type** números hasta (2^53) - 1

4. 🦜 **String type** se pueden iterar.

5. 🦜 **[BigInt type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)** número mayores a (2^53) - 1

   - No puede usarse con `Math`

6. 🦜 **[Symbol type](https://developer.mozilla.org/en-US/docs/Glossary/Symbol)** valor primitivo único e inmutable

#### Null

primitivo especial Caso especial para todos los objetos

#### Object

Valor en memoria que hace referencia a un identificador

🦜 Todos los valores primitivos exepto `null` y `undefined` tienen equivalentes de objetos.

- 🦜 String para string primitive
- 🦜 Number para number primitive
- 🦜 Bigint para bigint primitive
- 🦜 Boolean para boolean primitive
- 🦜 Symbol para symbol primitive

- **Diccionario {}**

#### Function

##### Arrow Functions

Si detro de un [setTimeout](arrowFuncions.bucles.js) usamos this el contexto va a cambiar si usamos funcciones normales, pero si usamos arrow functions el contexto se mantendra.

---

## ✨ Casteo o conversión de tipos

🦜 **ParseInt** Intenta convertir string a un valor numérico.

🦜 **ParseFloat** Convertir números a decimal

---

## 💡 [Operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_())

🦜 `Addition (+), Subtraction (-), Multiplication (*) y Division (/) Remainder (%) Exponentiation (**)`

🦜 El operador remainder a veces se denomina incorrectamente operador de "módulo". Es muy similar al módulo, pero no funciona correctamente con números negativos.
`{ }`
🦜 `-2 ** 2;` `(-2**2)` Da error ya que es ambiguo tenemos que ponerlo `-(2 ** 2);` o `(-2)**2`

🦜 `** y ^` son diferentes (por ejemplo: `2 ** 3 === 8` cuándo `2 ^ 3 === 1`)

🦜 `^` es operador [XOR LOGICO](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)

🦜 `a = a + 12;` podemos escribirlo como `a += 12`

### Incremento

- si tenemos `i = i + 1;` podemos escribirlo `i++;`

```javascript
// Postfix
var x = 3;
y = x++; // y = 3, x = 4

// Prefix
var a = 2;
b = ++a; // a = 3, b = 3
```

### Decremento

- si tenemos `i = i - 1;` podemos escribirlo `i--;`

```javascript
// Postfix
var x = 3;
y = x--; // y = 3, x = 2

// Prefix
var a = 2;
b = --a; // a = 1, b = 1
```

### Unario +

- intenta convertirlo en un número, si aún no lo está

```javascript
+3     // 3
+'3'   // 3
+true  // 1
+false // 0
+null  // 0
```

### unario -

- tbn puede convertir no numeros a números

## ✔ [Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math)

Métodos para realizar funciones matemáticas
