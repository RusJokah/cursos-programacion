// Clase Object y su método toString
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido; // Implementación del método nombreCompleto
    }
    toString(){ // Sobrescribimos el método toString de la clase Object
        return this.nombreCompleto(); // Llama al método nombreCompleto para obtener el nombre completo de la persona
    }
}

let persona1 = new Persona("Juan", "Pérez");
console.log(persona1.toString()); // "Juan Pérez"

// Sobrescribiendo el método toString de la clase Object
class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    toString(){
        return super.toString() + ", " + this._departamento;
    }
}

let empleado1 = new Empleado("Laura", "Gómez", "Sistemas");
console.log(empleado1.toString()); // "Laura Gómez, Sistemas"
//polimorfismo: el método toString se comporta de manera diferente dependiendo del objeto que lo invoque, ya sea de la clase Persona o de la clase Empleado.
