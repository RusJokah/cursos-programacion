let miNumero = 10;
console.log(typeof miNumero);

let miNumero2 = "30";
console.log(typeof miNumero2);
let edad = Number(miNumero2); // Convertir la cadena a número
console.log(typeof edad);

if (miNumero2 >= 18) {
    console.log("Es mayor de edad.");
} else {
    console.log("Es menor de edad.");
}

// Usando el operador ternario
let esMayor = (miNumero2 >= 18) ? "Es mayor de edad." : "Es menor de edad.";
console.log(esMayor);