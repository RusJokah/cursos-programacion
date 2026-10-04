let resultado = sumarTodos(7, 6, 4, 2, 6, 7, 6, 5, 1, 3, 4, 5, 6, 7, 8, 9, 10);

function sumarTodos() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; // suma = suma + arguments[i];
    }
    return suma;
}
console.log("Resultado de la función: " + resultado);