// Definición de la función
function miFuncion(a, b) {
    console.log("Suma: " + (a + b));
    console.log(arguments.length); // Muestra la cantidad de argumentos que se pasaron a la función
    console.log(arguments[0]); // Muestra el primer argumento
    return a + b;
}

// Llamada a la función
miFuncion("Ho", "la");
miFuncion(5, 4); 
//CONCEPTO DE HOISTING: Se puede llamar a la función antes de declararla, ya que las funciones se 
//elevan al inicio del contexto de ejecución.
let resultado = miFuncion(8, 7);
console.log("Resultado de la función: " + resultado);

// Declaración de la función de tipo expresión
let suma = function (a, b){return a + b};
// otra forma de hacerlo sería: let suma = (a, b) => a + b; (función flecha)
console.log(suma(5, 6));

// Otra forma de hacerlo
let resultado2 = suma(10, 15) + 100;
console.log("Resultado 2: " + resultado2);

// Funciones Self Invoking (solo se ejecutan una vez, no se pueden volver a llamar y se ejecutan automáticamente)
(function(a, b){
    console.log("Suma: " + (a + b));
})(3, 4);

//Declaración Función de tipo Flecha
const sumarFlecha = (a, b) => a + b;
resultado2 = sumarFlecha(3, 5);
console.log(resultado2);

//Argumentos son los valores que le damos a la función, mientras que parámetros son los nombres que le damos a 
//esos valores dentro de la función. Por ejemplo, en la función miFuncion(a, b), 'a' y 'b' son parámetros, 
//mientras que cuando llamamos a la función con miFuncion(5, 4), los valores 5 y 4 son los argumentos.