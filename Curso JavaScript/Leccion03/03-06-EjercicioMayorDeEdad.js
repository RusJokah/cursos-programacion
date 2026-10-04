let adulto = 18;

let persona1 = { nombre: "Juan", edad: 20 }, persona2 = { nombre: "Ana", edad: 10};

if (persona1.edad >= adulto) {
    console.log(persona1.nombre + " " + "es mayor de edad.");
} else {
    console.log(persona1.nombre + "Es menor de edad.");
}

if (persona2.edad >= adulto) {
    console.log(persona2.nombre + "Es mayor de edad.");
} else {
    console.log(persona2.nombre + " " + "es menor de edad.");
}