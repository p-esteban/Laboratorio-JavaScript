

// funcion nombrada


function sumar(a ,b) {
    
    return a +b;


}



console.log(sumar(1,2));

// funcion expresada
let x = 4;
const resta = function (a,b) {
    return a  - b;
}

console.log(resta(5,2));

//funcion anonima



console.log(function(){
    return "soy una funcion" ;
});

// usamos una funcion anonima como primer parametro en el foreach
let numeros = [1,2,3,4];
let contador = 0;
numeros.forEach(function(elemento){
    if (elemento % 2 == 0) {
        contador++;
    }
});

// console.log("cantidad de numeros pares: "+ contador);

// self invoking

(function(){
   // console.log("soy una self invoking");
})();

//arrow

const fnFlecha = (a,b) => a+b;
// console.log(fnFlecha(3,2));

//funciones como objetos

function multiplicar(a,b) {
   // console.log(arguments.length);

    return a*b;
}


//parametro valor

let z = 10;

function parametroValor(z) {
    z = 20;
}

parametroValor(z);

console.log(z);

//parametro referencia

 const miArray = ["sandia","manzana"];

function parametroReferencia(arr) {
    arr[1] = "pera";
}

parametroReferencia(miArray);

console.table(miArray);





//spread operator -> oparador de propagacion ...

const arrayA = [1,2,3,4,5,6];
const arrayB = [...arrayA];
// console.table(arrayA);
// console.table(arrayB);



// copiar un array en otro array

// arrayA.forEach(function(item){
//     arrayB.push(item);
// });

// for (let i = 0; i < arrayA.length; i++) {
//     arrayB.push( arrayA[i]) ;
    
// }

 //console.table(arrayB);




//parametro REST

function sumar(a,b, ...c) {
    let suma = a+ b;
    c.forEach(function(parametroArray){
        suma += parametroArray;
    });
    return suma;
}

console.log(sumar(2,4,6,3));






