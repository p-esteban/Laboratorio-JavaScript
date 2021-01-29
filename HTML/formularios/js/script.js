

let form = document.forms[0];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
});



let enviar = document.getElementById("boton");
// console.log(nombreUsuario);
enviar.addEventListener("click",()=>{
    let nombreUsuario = document.querySelector('#txtNombre').value;
    console.log("hola");
    console.log(nombreUsuario);
});


const activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);












// //var edad = 16;
// let nombre = "Pepe";
// const saludo = "Hola";

// let comida = ["pizza", "milanesa"];
// comida[2] = "sopa";

// comida.push("asado");

// console.log(comida);
// console.log(comida.length);

// let notas = [2, 3, 7, 8];
// let suma = 0;
// console.log("estructura for");
// for (let i = 0; i < notas.length; i++) {
//   notas[i] = i;
//   //  console.log(suma);
// }
// notas.forEach((item) => console.log(item));
// console.log(suma / notas.length);

let ingredientes = new Array();

ingredientes["primero"] = "harina";
ingredientes["segundo"] = "huevos";
ingredientes["tercero"] = "manteca";

console.table(ingredientes);

// for (const key in ingredientes) {
//   if (Object.hasOwnProperty.call(ingredientes, key)) {
//     const element = key;
//     console.log(element);
//   }
// }

// for (let nota of notas) {
//   nota += 1;
//   console.log(nota);
// }

// let edad = 10;

// if (edad >= 18) {
//   console.log("es mayor");
// } else {
//   console.log("es menor");
// }
// let numero = 2;

// console.log("estructura do while");
// // while (numero < 10) {
// //     console.log(numero);
// //     numero++;
// // }

// do {
//   console.log(numero);
//   numero++;
// } while (numero < 20);

// let mes = 20;

// switch (mes) {
//   case 1:
//     console.log("enero");
//     break;

//   case 2:
//     console.log("febrero");
//     break;
//   default:
//       console.log("no es un mes valido");
//     break;
// }
