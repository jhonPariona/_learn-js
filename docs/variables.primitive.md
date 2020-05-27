# Tipos de datos y estructura de datos

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

