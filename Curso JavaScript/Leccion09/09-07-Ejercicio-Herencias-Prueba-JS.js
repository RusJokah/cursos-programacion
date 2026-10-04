class Persona {

    static contadorPersonas = 0; //Atributo de nuestra clase

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        }
    get idPersona(){
        return this._idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`; //Sobreescribiendo el método de la clase Padre (Object)
    }
}
class Empleado extends Persona {
    static contadorEmpleados = 0; //Atributo de nuestra clase

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad); //Llamada al constructor de la clase Padre (Persona)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`; //Sobreescribiendo el método de la clase Padre (Persona)
    }
}
class Cliente extends Persona {
    static contadorClientes = 0; //Atributo de nuestra clase

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad); //Llamada al constructor de la clase Padre (Persona)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`; //Sobreescribiendo el método de la clase Padre (Persona)
    }
}

//Prueba de la clase Persona
let persona1 = new Persona('Juan', 'Perez', 28);
console.log(persona1.toString());
let persona2 = new Persona('Carlos', 'Lara', 30);
console.log(persona2.toString());

let empleado1 = new Empleado('Karla', 'Gomez', 25, 2000);
console.log(empleado1.toString());
let empleado2 = new Empleado('Laura', 'Quintero', 38, 3000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Dmitry', 'Anufriev', 30, new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente('Eduardo', 'Martínez', 32, new Date());
console.log(cliente2.toString());

//Para juntar los 3 archivos .js se puede hacer uso de la etiqueta <script> en el archivo .html, de la siguiente manera:
//<script src="09-07.1-Ejercicio-Herencias-Persona.js"></script>
//<script src="09-07.2-Ejercicio-Herencias-Empleado.js"></script>
//<script src="09-07.3-Ejercicio-Herencias-Cliente.js"></script>
//De esta manera se puede hacer uso de las clases Persona, Empleado y Cliente en el archivo .html y juntar todos los módulos, aunque tengas
//los archivos separados.