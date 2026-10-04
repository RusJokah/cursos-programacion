// Código que imprime los números pares del 0 al 20
for(let contador = 0; contador <=20; contador += 2){
    console.log("El número par es: " + contador);
}

// Código que imprime los números pares del 0 al 20 usando if

for(let contador2 = 0; contador2 <=20; contador2++){
    if(contador2 % 2 === 0){
        console.log("El número par usando IF es: " + contador2);
    }
}

// Código que imprime los números pares del 0 al 20 usando while
let contador3 = 0;
while(contador3 <= 20){
    if(contador3 % 2 === 0){
        console.log("El número par usando While es: " + contador3);
    }   
    contador3++;
}

// Código que imprime los números pares del 0 al 20 usando do while
let contadorDoWhile = 0;
do{
    if(contadorDoWhile % 2 === 0){
        console.log("El número par usando Do While es: " + contadorDoWhile);
    }
    contadorDoWhile++;
}while(contadorDoWhile <= 20);

// Código que imprime los números pares del 0 al 20 usando Break, pero solo el primero
for(let contador4 = 0; contador4 <=20; contador4++){
    if(contador4 % 2 === 0){
        console.log("El número par usando Break es: " + contador4);
        break;
    }
}

// Código que imprime los números pares del 0 al 20 usando continue
for(let contador5 = 0; contador5 <=20; contador5++){
    if(contador5 % 2 !== 0){
        continue;
    }
    console.log("El número par usando Continue es: " + contador5);
}