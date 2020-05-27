# Operadores

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
