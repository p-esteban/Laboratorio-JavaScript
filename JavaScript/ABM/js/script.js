import { Persona } from "./persona.js";
import { crearTabla, itemSeleccionado } from "./tabla.js";

let form = document.forms[0];
let nombre;
let email;
let listaPersonas = [];
let ultimoID = 0;

//me traigo los botones
let btnGuardar = document.getElementById("btnGuardar");
let btnModificar = document.getElementById("btnModificar");
let btnEliminar = document.getElementById("btnEliminar");
let btnCancelar = document.getElementById("btnCancelar");

//me traigo el div de la tabla
let divTabla = document.getElementById("divTabla");

//agrego manejador al evento load
window.addEventListener("load",()=>{
    divTabla.innerHTML = "";
    crearTabla(JSON.parse(localStorage.getItem("personas")));
});

//cancelo el evento submit del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//
//agrego los manejadores de eventos
//
divTabla.addEventListener("click", () => {
  const persona = getById(itemSeleccionado);
  document.getElementById("txtNombre").value = persona.nombre;
  document.getElementById("txtEmail").value = persona.email;
});

btnGuardar.addEventListener("click", () => {
  crearTabla(Alta());
});

btnModificar.addEventListener("click", () => {
  Modificar(itemSeleccionado);
  divTabla.innerHTML = "";
  crearTabla(JSON.parse(localStorage.getItem("personas")));
});
btnEliminar.addEventListener("click",()=>{
    Eliminar(itemSeleccionado);
    divTabla.innerHTML = "";
  crearTabla(JSON.parse(localStorage.getItem("personas")));
})

//
//ABM
//

//esta funcio crea una persona
function Alta() {
  //obtengo los valores que ingresa el usuario
  nombre = document.getElementById("txtNombre").value;
  email = document.getElementById("txtEmail").value;

  //obtengo ultimo id que guarde en LS
  ultimoID = JSON.parse(localStorage.getItem("lastID")) + 1;

  //creo un obejto persona
  let p = new Persona(ultimoID, nombre, email);

  //obtengo la lista gusrdad en LocalStorage
  listaPersonas = JSON.parse(localStorage.getItem("personas"));

  //agrego objeto persona a la lista
  listaPersonas.push(p);

  //guardo la lista de personas en el LocalStorage
  localStorage.setItem("personas", JSON.stringify(listaPersonas));
  //guardo el ultimo ID en LocalStorage
  localStorage.setItem("lastID", JSON.stringify(ultimoID));

  //retorno la lista actualizada
  return listaPersonas;
}

//obtengo el elemento de una lista a partir del ID que recibo como parametro
function getById(id) {
  const lista = JSON.parse(localStorage.getItem("personas"));
  for (const item of lista) {
    if (item.id == id) {
      return item;
    }
  }
}

//esta funcion modifica el objeto segun el id que recibe como parametro
function Modificar(id) {
  //obtengo la lista gusrdad en LocalStorage
  const lista = JSON.parse(localStorage.getItem("personas"));

  for (const persona of lista) {
    if (persona.id == id) {
      //obtengo los valores que ingresa el usuario
      nombre = document.getElementById("txtNombre").value;
      email = document.getElementById("txtEmail").value;

      //modifico los atributos del objeto persona
      persona.nombre = nombre;
      persona.email = email;
    }
  }

  //guardo la lista de personas en el LocalStorage
  localStorage.setItem("personas", JSON.stringify(lista));
  //guardo el ultimo ID en LocalStorage
  localStorage.setItem("lastID", JSON.stringify(ultimoID));
}

function Eliminar(id) {
  //obtengo la lista gusrdad en LocalStorage
  lista = JSON.parse(localStorage.getItem("personas"));

  for (let i = 0; i < listaLength; i++) {
    if (lista[i].id === id) {
      //elimino el elemento
      lista.splice(i, 1); // 1er param: indice del elemento, 2do: cuantos deseo eliminar.

      //guardo la lista de personas en el LocalStorage
      localStorage.setItem("personas", JSON.stringify(lista));
      break;
    }
  }
}
