//Tipos Primitivos: Se almacenan en la pila de memoria y se pasan por valor. Ejemplos: number, string, boolean, null, undefined, symbol.
let x = 10;

function cambiarValor(a) {
    a = 20;
    console.log("Valor dentro de la función: " + a);
}
console.log("Valor antes de la función: " + x);
cambiarValor(x);
// El valor de x no cambia, ya que se pasa por valor y no por referencia.
console.log("Valor después de la función: " + x);
//console.log(a); // Esto generará un error, ya que 'a' no está definido fuera de la función.

//Tipos de Referencia: Se almacenan en el heap de memoria y se pasan por referencia. Ejemplos: object, array, function.
const persona = {
    nombre: "Juan",
    apellido: "Pérez"
};
function cambiarValorObjeto(p1) {
    p1.nombre = "Carlos";
    p1.apellido = "López";
    console.log("Valor dentro de la función: " + p1.nombre + " " + p1.apellido);
}
console.log("Valor antes de la función: " + persona.nombre + " " + persona.apellido);
cambiarValorObjeto(persona);
console.log("Valor después de la función: " + persona.nombre + " " + persona.apellido);
console.log(persona);
