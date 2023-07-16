"use strict";
console.log ("Hola");

// let veriable1 = "hola";
// const variable2 = "chau"

// si 5>2 
// entoces hace ...
// sino ...

if (5 > 2){
    console.log("Se cumplio!")
} else{
    console.log("No se cumplio!")
}

let edad1;
edad1 = prompt("Ingrese su edad");
let edad2;
edad2 = prompt("Ingrese la otra edad");

let edad1Num = Number (edad1);
let edad2Num = Number (edad2);

console.log (edad1Num + edad2Num);


if (edad1Num > edad2Num){
    console.log("La mayor edad es la 1");
} else if ( edad1Num < edad2Num) {
    console.log("La mayor edad es la 2");
} else {
    console.log ("Las edades son iguales")
}
