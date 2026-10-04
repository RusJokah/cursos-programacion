let nombre;
nombre = "Dmitry";
console.log(nombre);

let nombreCompleto = "Dmitry Kozlov"; // Buenas prácticas para nombres de Variables, importa si es en mayus o minus.
let nombrecompleto = "Carlos Santana"; // Mala práctica, confunde al lector.
console.log( nombreCompleto );
console.log( nombrecompleto );

//Las variables puede empezar de maneras diferentes:
let a1nombre = "Luis";
let _nombre = "Ana";
let $nombre = "Pepe";
// let 1nombre = "Juan"; // Esto causará un error porque las variables no pueden empezar con un número

//let break = 10; // Esto causará un error porque 'break' es una palabra reservada
//console.log(break); // Palabras reservadas no pueden ser usadas como nombres de variables

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

const apellido = "Kozlov";
apellido = "Smith"; // Esto causará un error porque 'apellido' es una constante
console.log(apellido);

// Palabras reservadas: abstract, arguments, await, boolean, break, byte, case, catch, char, class, const, continue, debugger, 
// default, delete, do, double, else, enum, eval, export, extends, false, final, finally, float, for, function, goto, if, 
// implements, import, in, instanceof, int, interface, let, long, native, new, null, package, private, protected, public, 
// return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, void, volatile, 
// while, with, yield.