//Ciclo While
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}
console.log('Fin del ciclo while');

// Ejemplo de ciclo while con una condición que nunca se cumple -- No se ejecuta el bloque
let numero = 5;
while (numero < 5) {
    console.log(numero);
    numero++;
}
console.log('Fin del segundo ciclo while');

//Ciclo Do While
let contadorDoWhile = 0;
do {
    console.log(contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile < 3);
console.log('Fin del ciclo do while');

//Ciclo For
for(let contador2 = 0; contador2 <= 10; contador2++){
    console.log("El valor del contador es: " + contador2);
}
console.log("Fin del ciclo for");