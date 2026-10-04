class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
        }
        get tipoEntrada(){
            return this._tipoEntrada;
        }
        set tipoEntrada(tipoEntrada){
            this._tipoEntrada = tipoEntrada;
        }
        get marca(){
            return this._marca;
        }
        set marca(marca){
            this._marca = marca;
        }
        toString(){
            return `Tipo de entrada: ${this._tipoEntrada}; Marca: ${this._marca}.`;
        }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `idRaton: ${this._idRaton}; ${super.toString}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `idTeclado: ${this._idTeclado}; ${super.toString}`;
    }
}

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        return this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        return this._tamaño = tamaño;
    }
    toString(){
        return `${this._idMonitor} ${this._marca} ${this._tamaño}`
    }
}

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get nombre(){
        return this._nombre;
    }
    get monitor(){
        return this._monitor;
    }
    get teclado(){
        return this._teclado;
    }
    get raton(){
        return this._raton;
    }
}

let raton1 = new Raton('USB', 'Logitech');
console.log(raton1.toString());