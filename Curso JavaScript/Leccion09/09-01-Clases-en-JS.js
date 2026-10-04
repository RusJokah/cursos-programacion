class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Método get para obtener el nombre
    get nombre(){
        return this._nombre;
    }
    //Método set para modificar el nombre
    set nombre(nombre){
        this._nombre = nombre;
    }
}
//Método get y set permiten obtener y modificar las propiedades de un objeto, sin necesidad de acceder directamente a ellas, lo que permite encapsular 
//la información y protegerla de modificaciones no deseadas.
//Creamos un objeto de tipo Persona
let persona1 = new Persona("Juan", "Pérez");
console.log(persona1); // Persona { _nombre: 'Juan', _apellido: 'Pérez' }
console.log(persona1._nombre); // "Juan"

persona1.nombre = "Dmitry"; // Modifica el nombre usando el método set
console.log(persona1.nombre); // "Dmitry" (obtiene el nombre usando el método get)
