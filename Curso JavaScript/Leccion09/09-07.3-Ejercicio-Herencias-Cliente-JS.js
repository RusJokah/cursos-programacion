class Cliente extends Persona {
    static contadorClientes = 0; //Atributo de nuestra clase

    constructor(nombre, apellido, edad, fechaRegistro){
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