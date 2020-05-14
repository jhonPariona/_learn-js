# 🏆 Learning [javascript](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

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

## ✨ Buenas Prácticas

🦜 Usar siempre al inicio `"use strict";`

## 🤩Variables

🦜 Los nombres de las variables se llaman **identificadores**.

🦜 Las variables en js son [hoisted(hosting)](hoisting.js) (**Al parecer solo aplica a var**)

🦜 todas las variables deben terminar en punto y coma (No es necesario pero recomendado);

🦜 Un identificador debe empezar por una letra, guión bajo o símbolo \$.

🦜 **CaseSensitive** (distigue mayusculas de minúsculas)

🦜 usar **camelCase** (RECOMENDADO)

## ✨ Ámbito de variable

### Global

Variables declaradas fuera de una función. Disponibles Globalmente.

### Local

Variables declaradas dentro de una función. Solo están disponibles dentro de dicha función.

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

    🦜 String para string primitive
    🦜 Number para number primitive
    🦜 Bigint para bigint primitive
    🦜 Boolean para boolean primitive
    🦜 Symbol para symbol primitive

- **Diccionario {}**

#### Function

---

## ✨ Casteo o conversión de tipos

🦜 **ParseInt** Intenta convertir string a un valor numérico.

🦜 **ParseFloat** Convertir números a decimal

---
## 💡 Operadores

a
