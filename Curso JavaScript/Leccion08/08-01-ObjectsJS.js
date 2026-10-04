let x = 10;
console.log(x.lenght); // undefined, ya que los números no tienen longitud

let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};
console.log(persona.nombreCompleto()); // "Juan Pérez"
console.log(persona.nombreCompleto(persona.nombre = "Dmitry", persona.apellido = "Creative")); // "Dmitry Creative"
console.log(persona.nombre);

//Para crear un Nuevo Objeto en memoria
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.apellido = "López";
persona2.edad = 25;
console.log(persona2.nombre + " " + persona2.apellido); // "Carlos López"

//Para acceder a las propiedades de un objeto, podemos usar la notación de punto o la notación de corchetes
console.log(persona["apellido"]);
console.log(persona.apellido);

//for in: para recorrer las propiedades de un objeto
for (let nombrePropiedad in persona) {
    console.log(nombrePropiedad + ": " + persona[nombrePropiedad]);
}

//Para eliminar una propiedad de un objeto, podemos usar el operador delete
delete persona.edad;
console.log(persona.edad); // undefined

//Para comprobar si un objeto tiene una propiedad, podemos usar el operador in
console.log("nombre" in persona);

//Para agregar una propiedad a un objeto, podemos usar la notación de punto o la notación de corchetes
persona.direccion = "Calle Falsa 123";
console.log(persona.direccion); // "Calle Falsa 123"

//Para crear un objeto a partir de otro objeto, podemos usar el método Object.create()
let persona3 = Object.create(persona);
persona3.nombre = "Ana";
persona3.apellido = "García";
persona3.idioma = "es";
console.log(persona3.nombreCompleto()); // "Ana García"
//Para agregar un método a un objeto, podemos usar la notación de punto o la notación de corchetes
persona3.lang = function() {
    return persona3.idioma.toUpperCase();
};
console.log(persona3.lang(persona3.idioma)); // "ES"

//set y get: para crear propiedades que se comporten como métodos, podemos usar los métodos set y get
//get lang(){
//    return this.idioma.toUpperCase();
//}
//set lang(lang){
//    this.idioma = lang.toUpperCase();
//}
persona3.idioma = "en";
console.log(persona3.lang(persona3.idioma)); // "EN"
console.log(persona3.idioma); // "en"