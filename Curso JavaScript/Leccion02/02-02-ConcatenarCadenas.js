var nombre = "Dmitry";
var apellido = "Kozlov";

var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + " " + 'Santana';
console.log(nombreCompleto2);

// Otra forma de concatenar usando template literals
var nombreCompleto3 = `${nombre} ${apellido}`;  
console.log(nombreCompleto3);

// Concatenar con más texto
var saludo = "Hola, mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo);

var x = nombre + " " + (1 + 2) + 3;
console.log(x);