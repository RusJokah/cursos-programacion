// Método estático en JavaScript
class Persona {

    static contadorPersonas = 0; // Atributo estático, pertenece a la clase y no a los objetos

    email = "Valor por defecto"; // Atributo de la clase, pertenece a los objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorPersonas++;
        console.log("Se incrementa el contador: " + Persona.contadorPersonas);
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
    static saludar(){ // Método estático, no se puede llamar desde un objeto, solo desde la clase
        console.log("Hola, soy un método estático");
    }
    static saludar2(persona){ // Método estático que recibe un objeto de tipo Persona
        console.log(persona.nombre + " " + persona.apellido);
    }
}

let persona1 = new Persona("Juan", "Pérez");
console.log(persona1); // "Juan Pérez"

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
console.log(empleado1); // "Laura Gómez, Sistemas"

//persona1.saludar(); // Error: persona1.saludar is not a function
//no es posible llamar a un método estático desde un objeto, ya que los métodos estáticos pertenecen a la clase y no a las instancias de la clase. 
//Por lo tanto, para llamar al método estático, debemos hacerlo directamente desde la clase:
Persona.saludar(); // "Hola, soy un método estático"
Persona.saludar2(persona1); // "Juan Pérez"

Empleado.saludar(); // "Hola, soy un método estático"
Empleado.saludar2(empleado1); // "Laura Gómez"

console.log(persona1.contadorPersonas); //undefined. Variable de clase, no se puede acceder desde un objeto
console.log(Persona.contadorPersonas); // 2.
console.log(Empleado.contadorPersonas); // 2. Variable de clase, se puede acceder desde la clase y desde las clases que heredan de ella

console.log(persona1.email); // "Valor por defecto". Variable de instancia, se puede acceder desde un objeto

empleado1.email = "dmitry@gmail.com"; // Modifica el valor de la variable de instancia
console.log(empleado1.email); // "dmitry@gmail.com", los demás objetos no les afecta
