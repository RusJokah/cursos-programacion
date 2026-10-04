// let autos = new Array('BMW', 'Audi', 'Volvo');  CODIGO ANTIGUO PARA CREAR ARREGLOS
const autos = ['BMW', 'Audi', 'Volvo']; // Manera moderna de crear arreglos
console.log(autos);

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

[autos[1] = 'Mercedes Benz']; // Modificar un elemento del arreglo
console.log(autos[1]);
console.log(autos.length); // Saber la cantidad de elementos en un arreglo

for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
} // Recorrer un arreglo con un ciclo for

autos.push('Audi'); // Agregar un nuevo elemento al final del arreglo
console.log(autos.length);
console.log(autos);

autos[autos.length] = 'Cadillac'; // Otra forma de agregar un nuevo elemento al final del arreglo
console.log(autos.length);
console.log(autos);

autos.pop(); // Eliminar el último elemento del arreglo
console.log(autos.length);
console.log(autos);

autos.shift(); // Eliminar el primer elemento del arreglo
console.log(autos.length);
console.log(autos);

autos.unshift('Chevrolet'); // Agregar un elemento al inicio del arreglo
console.log(autos.length);
console.log(autos);

// autos[10] = 'Ferrari';  No es recomendable hacer esto, ya que crea elementos vacíos en el arreglo
// console.log(autos.length);
// console.log(autos);

// Preguntar si una variable es un arreglo
console.log(Array.isArray(autos));
console.log(autos instanceof Array);

// Diferentes tipos de datos en un arreglo
const deTodo = [123, 'Hola', true, null, undefined, {nombre: 'Juan', apellido: 'Perez'}, [1, 2, 3]];
console.log(deTodo);
console.log(deTodo.length);