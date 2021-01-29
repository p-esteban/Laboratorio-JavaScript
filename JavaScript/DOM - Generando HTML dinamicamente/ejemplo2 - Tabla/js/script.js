import {crearTabla} from "./tabla.js";


let form = document.forms[0];


//agregar manejador del evento submit
form.addEventListener("submit",(e)=>{
    //cancelo el evento submit
    e.preventDefault();
});

let btnCrearTabla = document.getElementById("btnCrearTabla");

const p1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25

}

const p2 = {
    nombre: "Pepe",
    apellido: "Peposo",
    edad: 100

}

let listaPersonas = [p1,p2];

btnCrearTabla.addEventListener("click",()=>{

    crearTabla(listaPersonas);

})