let numero = 3;

let numeroTexto = "Valor desconocido";

switch(numero) {
    case 1:
        numeroTexto = "Número uno";
        break;
    case 2:
        numeroTexto = "Número dos";
        break;
    case 3:
        numeroTexto = "Número tres";
        break;
    default:
        numeroTexto = "Número fuera de rango";
        break;
}
console.log("El valor de numeroTexto es: " + numeroTexto + ".");