//Función constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(Persona.prototype); // Muestra el prototipo de la función constructor
//Creamos dos objetos de tipo Persona
let padre = new Persona("Juan", "Pérez", "juan.perez@email.com");
console.log(padre.nombreCompleto()); // "Juan Pérez"
console.log(padre);
let madre = new Persona("Laura", "Gómez", "laura.gómez@email.com");
console.log(madre.nombreCompleto()); // "Laura Gómez"
console.log(madre);

//FORMAS DE CREAR OBJETOS EN JAVASCRIPT
//1. Usando la función constructor
let miObjeto = new Object(); // Crea un objeto vacío
//2. Usando la sintaxis literal de objetos
let miObjeto2 = {}; // Crea un objeto vacío, crear función simplificada para Object
// Crea un objeto de tipo String
let miCadena = new String("Hola"); 
let miCadena2 = "Hola"; //Función simplificada para objeto String
// Crea un objeto de tipo Number
let miNumero = new Number(1); 
let miNumero2 = 1; //Función simplificada para objeto Number
// Crea un objeto de tipo Boolean
let miBoolean = new Boolean(false); 
let miBoolean2 = false; //Función simplificada para objeto Boolean
// Crea un arreglo vacío
let miArreglo = new Array(); 
let miArreglo2 = []; //Función simplificada para objeto Array
// Crea una función vacía
let miFuncion = new Function(); 
let miFuncion2 = function(){}; //Función simplificada para objeto Function

//PROTOTYPE (Asignar propiedades y métodos a todos los objetos creados en la función constructor)
//Agregamos un método al prototipo de la función constructor, que es para añadir propiedades y métodos a todos los objetos creados en la función constructor
Persona.prototype.telefono = "123456789";
console.log(padre.telefono); // "123456789"
console.log(madre.telefono); // "123456789"
//Si quisiera agregar a una sola Persona, lo haría de la siguiente manera:
padre.telefono = "987654321";
console.log(padre.telefono); // "987654321"
console.log(madre.telefono); // "123456789"
//Es decir, puedo agregar una propiedad a todos los objetos de la función, y luego modificar los que quiera, conservando el resto "por defecto"
