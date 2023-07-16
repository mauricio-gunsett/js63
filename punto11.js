"use strict";

let numero1 = prompt("Ingrese el número");
let num1 = Number(numero1);

if (num1 % 2 === 0) {
  console.log("El número " + num1 + " es divisible en 2");
} else {
  console.log("El número " + num1 + " no es divisible en 2");
}

if (num1 % 3 === 0) {
  console.log("El número " + num1 + " es divisible en 3");
} else {
  console.log("El número " + num1 + " no es divisible en 3");
}

if (num1 % 5 === 0) {
  console.log("El número " + num1 + " es divisible en 5");
} else {
  console.log("El número " + num1 + " no es divisible en 5");
}
if (num1 % 7 === 0) {
  console.log("El número " + num1 + " es divisible en 7");
} else {
  console.log("El número " + num1 + " no es divisible en 7");
}
