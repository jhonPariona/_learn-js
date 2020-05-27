# 🏆 Learning [javascript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/jhonPariona/_learn-js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jhonPariona/_learn-js/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/jhonPariona/_learn-js.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/jhonPariona/_learn-js/context:javascript)


<details>
<summary>📜 Indice</summary>
<ul>
<li><a href="#-learning-javascript">🏆 Learning javascript</a></li>
</ul>
</details>

## 📖 Documentations

> [🦊 mdn](https://developer.mozilla.org/es/docs/Web/JavaScript) | [✨ Majo Apuntes](https://majoledesma.github.io/js-notes/)

## 📽️ Courses

> [Udemy javascipt moderno Fernando Herrera](https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/)

## 🎩 [History](https://github.com/jhonPariona/_learn-js/blob/master/docs/history.md#-history)

- Creador [Brendan Eich en Netscape](https://es.wikipedia.org/wiki/Brendan_Eich)

🦜 Primero se llamo **Mocha**, luego **LiveScript** despues **JavaScript**

## ✨ **[Características](https://github.com/jhonPariona/_learn-js/blob/master/docs/caracteristicas.md#-caracter%C3%ADsticas)**

## ✨ [Buenas Prácticas](https://github.com/jhonPariona/_learn-js/blob/master/docs/buenas-practicas.md#buenas-pr%C3%A1cticas)


## [🤩Variables](## 🤩Variables)

🦜 La **asignación** siempre va de **derecha a izquierda**. Todo a la derecha del `=` operador se resuelve antes de asignar el valor a la variable.

🦜 Los **nombres** de las variables se llaman **identificadores**.

🦜 Cuando se **declaran** las variables tienen un **valor inicial de undefined**.

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

## 🦊 Tipos de datos y estructura de datos

### Tipo de datos [primitivos](https://github.com/jhonPariona/_learn-js/blob/master/docs/variables.primitive.md#tipos-de-datos-y-estructura-de-datos)

Datos que no son [objetos](https://developer.mozilla.org/en-US/docs/Glossary/object) y no tienen [métodos](https://developer.mozilla.org/en-US/docs/Glossary/method) (propiedad de un objeto).

#### [Strings](https://github.com/jhonPariona/_learn-js/blob/master/docs/varibles.string.md#strings)

```javascript
let declarationVar = "asignation";
```

🦜 Se pude usar `'` o `"`

🦜 En la consola imprime negro

#### [Number]

🦜 En la consola imprime azul


#### Arrow Functions

Si detro de un [setTimeout](arrowFuncions.bucles.js) usamos this el contexto va a cambiar si usamos funcciones normales, pero si usamos arrow functions el contexto se mantendra.

---

## ✨ Casteo o conversión de tipos

🦜 **ParseInt** Intenta convertir string a un valor numérico.

🦜 **ParseFloat** Convertir números a decimal

---

## 💡 [Operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_())

🦜 `Addition (+), Subtraction (-), Multiplication (*) y Division (/) Remainder (%) Exponentiation (**)`

🦜 Si realiza una **operación matemática** con **undefined**, su resultado será lo **NaN** que significa "No es un número" .

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
