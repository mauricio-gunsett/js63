"use strict";

let numero1;
numero1 = prompt("Ingrese el primer número");
let numero2;
numero2 = prompt("Ingrese el segundo número");
let numero3;
numero3 = prompt("Ingrese el tercer número");

let num1 = Number(numero1);
let num2 = Number(numero2);
let num3 = Number(numero3);

if (num1 > num2 && num1 > num3) {
  console.log("El mayor es el 1");
} else if (num1 < num2 && num2 > num3) {
  console.log("el mayor es el 2");
} else if (num1 < num3 && num3 > num2) {
  console.log("el mayor es el 3");
}
