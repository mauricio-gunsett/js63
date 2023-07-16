"use strict";
let numero1 = prompt("Ingrese el número");
let num1 = Number(numero1);

if (num1 % 2 === 0 || num1 % 3 === 0 || num1 % 5 === 0 || num1 % 7 === 0) {
  console.log("El numero " + num1 + " es divisible");
} else {
  console.log("el numero " + num1 + " no es divisible");
}
