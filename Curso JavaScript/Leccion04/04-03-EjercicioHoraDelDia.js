let hora = 5; // Puedes cambiar este valor para probar diferentes horas
let mensaje;

if (hora >= 0 && hora < 6) {
    mensaje = "Durmiendo";
}
else if (hora >= 6 && hora < 12) {
    mensaje = "Buenos días";
}
else if (hora >= 12 && hora < 18) {
    mensaje = "Buenas tardes";
}
else if (hora >= 18 && hora <=23) {
    mensaje = "Buenas noches";
}
else {
    mensaje = "Hora incorrecta";
}
console.log(mensaje);