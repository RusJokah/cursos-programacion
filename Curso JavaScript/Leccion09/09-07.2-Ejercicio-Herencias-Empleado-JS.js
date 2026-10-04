class Empleado extends Persona {
    static contadorEmpleados = 0; //Atributo de nuestra clase

    constructor(sueldo) {
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