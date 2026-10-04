let a = 3, b = 2, c= "3";

//Igualdad
let z = a == b; // false: valores diferentes (3 y 2)
console.log("a == b: " + (a == b) + "."); // a == b: false.

z = a === c; // false: tipos diferentes (3 es número, "3" es cadena) -- Este es más estricto
console.log("a === c: " + (a === c) + "."); // a === c: false.

//Desigualdad
z = a != b; // true: valores diferentes (3 y 2)
console.log("a != b: " + (a != b) + "."); // a != b: true.

// Operadores relacionales
z = a > b; // true: 3 es mayor que 2
console.log("a > b: " + (a > b) + "."); // a > b: true.
z = a < b; // false: 3 no es menor que 2
console.log("a < b: " + (a < b) + "."); // a < b: false.
z = a >= c; // true: 3 es mayor o igual que 3
console.log("a >= c: " + (a >= c) + "."); // a >= c: true.
z = a <= b; // false: 3 no es menor o igual que 2
console.log("a <= b: " + (a <= b) + "."); // a <= b: false.