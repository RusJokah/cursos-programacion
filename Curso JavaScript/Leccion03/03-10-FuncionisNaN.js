let miNumero = "18x";
let edad = Number(miNumero);
console.log(edad);

// Verificar si la conversión resultó en un valor NaN
if (isNaN(edad)) {
    console.log("La edad introducida no es un número válido.");
} else {
    if (edad >= 18) {
        console.log("Es mayor de edad.");
    } else {
        console.log("Es menor de edad.");
    }
}

// Usando el operador ternario con verificación NaN
if  (isNaN(edad)) {
    console.log("La edad introducida no es un número válido.");
} 
else {
    let esMayor = (edad >= 18) ? "Es mayor de edad." : "Es menor de edad.";
    console.log(esMayor);
}