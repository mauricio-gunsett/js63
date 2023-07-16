"use strict";

let numero1;
numero1 = prompt ("ingrese el primer número");


let numero2;
numero2 = prompt ("ingrese el segundo número");


let numero3;
numero3 = prompt ("ingrese el el tercer número");

let mayor = numero1;

if (numero2 > mayor) {
    mayor = numero2;
}

if (numero3 > mayor) {
    mayor = numero3;
}

console.log("El número mayor es: " + mayor);