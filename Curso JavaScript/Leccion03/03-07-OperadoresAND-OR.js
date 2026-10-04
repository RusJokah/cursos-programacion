// Operador AND (&&)
// El operador AND (&&) se utiliza para combinar dos o más condiciones. 
// Todas las condiciones deben ser verdaderas para que el resultado final sea verdadero.
let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("El valor de a está entre " + valMin + " y " + valMax + ".");
}
else {
    console.log("El valor de a está fuera del rango.");
}

// Operador OR (||)
// El operador OR (||) se utiliza para combinar dos o más condiciones. 
// Si al menos una de las condiciones es verdadera, el resultado final será verdadero.
let vacaciones = false, diaDescanso = true;
if (vacaciones || diaDescanso) {
    console.log("Puedes asistir al juego.");
}
else {
    console.log("No puedes asistir al juego.");
}