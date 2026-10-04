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
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llama al constructor de la clase padre (Persona)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobrescribimos el método nombreCompleto de la clase padre (Persona)
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento; // Llama al método nombreCompleto de la clase padre y añade el departamento
    }
}

let persona1 = new Persona("Juan", "Pérez"); // Creamos un objeto de tipo Persona
console.log(persona1); // Persona { _nombre: 'Juan', _apellido: 'Pérez' }

let empleado1 = new Empleado("Laura", "Gómez", "Sistemas"); // Creamos un objeto de tipo Empleado, que hereda de Persona
console.log(empleado1);
console.log(empleado1.nombre); // "Laura" (heredado de Persona)
empleado1.nombre = "Dmitry"; // Modifica el nombre usando el método set heredado de Persona
console.log(empleado1.nombre); // "Dmitry"

console.log(empleado1.nombreCompleto()); // "Dmitry Gómez, Sistemas" (sobrescrito en Empleado)
