/*
Ejemplos de Tipo de Datos
*/

// Tipo de dato String
var nombre = "Dmitry";
console.log(nombre);

// TypeOf - Para mostrar el tipo de dato
console.log(typeof nombre);
nombre = 10;
console.log(typeof nombre);

// Tipo de dato Number
var numero = 1000;
console.log(numero);

// Tipo de dato Object
var objeto = {
    nombre: "Dmitry",
    apellido: "Anufriev",
    insta: "@RusJokah"};
console.log(objeto);

// Tipo de dato Boolean (true, false)
var bandera = true;
console.log(bandera);

// Tipo de dato Function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo de dato Clase (Es una función especial)
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

// Tipo de dato Undefined
var x;
console.log(x);
console.log(typeof x);

// Null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y); // Aquí hay un error en JavaScript, ya que devuelve "object"

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);