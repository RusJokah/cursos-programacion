let persona1 = {
    nombre: "Juan",
    apellido: "Pérez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    },
    nombreCompleto2: function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

let persona3 = {
    nombre: "María",
    apellido: "González"
}

//USO DEL MÉTODO CALL
//El método call() invoca una función con un valor dado de this y argumentos proporcionados individualmente. En este caso, estamos invocando el método 
//nombreCompleto de persona1, pero con el contexto de persona2, es decir, this se refiere a persona2.
console.log(persona1.nombreCompleto("Lic.", "123456789")); // "Lic.: Juan Pérez, 123456789"
console.log(persona1.nombreCompleto.call(persona2, "Ing.", "987654321")); // "Ing.: Carlos Lara, 987654321"

//USO DEL MÉTODO APPLY
//El método apply() es similar a call(), pero en lugar de pasar los argumentos individualmente, se pasan como un arreglo. En este caso, estamos invocando 
//el método nombreCompleto2 de persona1, pero con el contexto de persona3, es decir, this se refiere a persona3.
console.log(persona1.nombreCompleto2.apply(persona3, ["Ing.", "987654321"])); // "Ing.: María González, 987654321"
let arreglo = ["Ing.", "987654321"];
console.log(persona1.nombreCompleto.apply(persona3, arreglo)); // "Ing.: María González, 987654321"