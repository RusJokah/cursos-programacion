let x = 5;
let y = 10;
let z = ++x + y--; // z = 6 + 10 = 16, x = 6, y = 9
console.log("Resultado de la expresión ++x + y--: " + z + "."); // Resultado de la expresión ++x + y--: 16.
console.log("Valor final de x: " + x + "."); // Valor final de x: 6.
console.log("Valor final de y: " + y + "."); // Valor final de y: 9.

let resultado = 4 + 5 * 6 / 3;
console.log("Resultado de la expresión 4 + 5 * 6 / 3: " + resultado + "."); // Resultado de la expresión 4 + 5 * 6 / 3: 14.

resultado = (4 + 5) * (6 / 3);
console.log("Resultado de la expresión (4 + 5) * (6 / 3): " + resultado + "."); // Resultado de la expresión (4 + 5) * (6 / 3): 18.
resultado = 2 ** 3 + 4 * 2;
console.log("Resultado de la expresión 2 ** 3 + 4 * 2: " + resultado + "."); // Resultado de la expresión 2 ** 3 + 4 * 2: 16.
resultado = 10 % 3 + 2 ** 2 * 3;
console.log("Resultado de la expresión 10 % 3 + 2 ** 2 * 3: " + resultado + "."); // Resultado de la expresión 10 % 3 + 2 ** 2 * 3: 14.
resultado = ++x * 2 + y--;
console.log("Resultado de la expresión ++x * 2 + y--: " + resultado + ".");
// Resultado de la expresión ++x * 2 + y--: 21.
console.log("Valor final de x después de la expresión: " + x + "."); // Valor final de x después de la expresión: 7.
console.log("Valor final de y después de la expresión: " + y + "."); // Valor final de y después de la expresión: 8.