import { Persona } from "./persona.js";
import { crearTabla, itemSeleccionado } from "./tabla.js";


let form = document.forms[0];
let nombre;
let email;
let listaPersonas = [];
let ultimoID = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//me traigo los botones
let btnGuardar = document.getElementById("btnGuardar");
let btnModificar = document.getElementById("btnModificar");
let btnEliminar = document.getElementById("btnEliminar");
let btnCancelar = document.getElementById("btnCancelar");

//me traigo el div de la tabla
let divTabla = document.getElementById("divTabla");


//agrego manejador al evento click del boton Guardar
btnGuardar.addEventListener("click", () => {
   
    crearTabla(Alta());

});

divTabla.addEventListener("click",()=>{
    actualizarFomulario(getById(itemSeleccionado));
});

btnModificar.addEventListener("click",()=>{
    Modificar(itemSeleccionado);
    divTabla.innerHTML = "";
    crearTabla(leerLS());

});

//esta funcio crea una persona
function Alta() {
    LeerInput();
    listaPersonas = leerLS();
    ultimoID = getId() + 1;
  let p = new Persona(ultimoID,nombre,email);
  listaPersonas.push(p);
  guardarLS("personas",listaPersonas);
  guardarLS("lastID",ultimoID);
  return listaPersonas;
}

function actualizarFomulario(persona) {
     document.getElementById("txtNombre").value = persona.nombre;
     document.getElementById("txtEmail").value = persona.email;
}

function getById(id) {
    const lista = leerLS();
    for (const item of lista) {
        if (item.id == id) {
            return item;
        }
    }
}

//esta funcion modifica el objeto segun el id que recibe como parametro
function Modificar(id) {

    //buscar el la lista de Persona el objeto q tenga el id del parametro

    const lista = leerLS();

    for (const persona of lista) {
        
        if (persona.id == id) {
            LeerInput();
            persona.nombre = nombre;
            persona.email = email;
        }
    }
    ultimoID = getId();
    localStorage.clear();
    guardarLS("lastID",ultimoID);
    guardarLS("personas",lista);


}



//lee los valores ingresdao en input
function LeerInput() {
  // traigo el valor de los input
   nombre = document.getElementById("txtNombre").value;
   email = document.getElementById("txtEmail").value;
}

//guardo en localstorage
function guardarLS(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
}

//leo la lista de personas del localstorage
function leerLS() {
    return JSON.parse(localStorage.getItem("personas")) || [];
}

function getId() {
    ultimoID = JSON.parse(localStorage.getItem("lastID") || 0);
    return ultimoID;
}

