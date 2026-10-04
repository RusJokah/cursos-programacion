// + Addition, - Subtraction, * Multiplication, / Division, % Modulus, ** Exponentiation, ++ Increment, -- Decrement

let a = 3;
let b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z + "."); // Resultado de la suma: 5

z = a - b;
console.log("Resultado de la resta: " + z + "."); // Resultado de la resta: 1

z = a * b;
console.log("Resultado de la multiplicación: " + z + "."); // Resultado de la multiplicación: 6

z = a / b;
console.log("Resultado de la división: " + z + "."); // Resultado de la división: 1.5

z = a % b; // Módulo: resto de la división
console.log("Resultado del módulo: " + z + "."); // Resultado del módulo: 1

z = a ** b;
console.log("Resultado de la exponenciación: " + z + "."); // Resultado de la exponenciación: 9

//Incremento
z = ++a; // Pre-incremento: primero incrementa a, luego asigna a z
console.log("Resultado del pre-incremento: " + z + "."); // Resultado del pre-incremento: 4

z = b++; // Post-incremento: primero asigna b a z, luego incrementa b
console.log("Resultado del post-incremento: " + z + "."); // Resultado del post-incremento: 2
console.log("Valor de b después del post-incremento: " + b + "."); // Valor de b después del post-incremento: 3

//Decremento
z = --a; // Pre-decremento: primero decrementa a, luego asigna a z
console.log("Resultado del pre-decremento: " + z + "."); // Resultado del pre-decremento: 3
z = b--; // Post-decremento: primero asigna b a z, luego decrementa b
console.log("Resultado del post-decremento: " + z + "."); // Resultado del post-decremento: 3
console.log("Valor de b después del post-decremento: " + b + "."); // Valor de b después del post-decremento: 2


