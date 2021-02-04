
export let itemSeleccionado;


export function crearTabla(array) {
    //me traigo el div
    let section = document.getElementById("divTabla");

   section.innerHTML = "";
    
    let table = document.createElement("table");
    table.setAttribute("id", "tablaDatos");

    //agregar la cabecera con los titulos a la tabla
    table.appendChild(crearCabecera(array[0]));
    let x = crearBody(array);
    table.appendChild(x);

    section.appendChild(table);


}


function crearCabecera(item) {
    
    //creo la fila donde van a ir los titulo de cada columna
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    
    //creo los th recorriendo un item
    
    for (const key in item) {
        //creo el th que contendra el titulo de la columna
        let th = document.createElement("th");

        //el "key" es el titulo de cada columna, lo creo como textNode
        let tituloColumna = document.createTextNode(key);

        //agregar el titulo al th
        th.appendChild(tituloColumna);
        //agrego los titulos a la fila
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    return thead;



}

function crearBody(array) {

    const tbody = document.createElement("tbody");

    array.forEach((element) => {
        let tr = document.createElement("tr");

        for (const atributo in element) {
           //creo el td y sus datos
           let td = document.createElement("td");
           let dato = document.createTextNode(element[atributo]);

           //agrego el dato al td
           td.appendChild(dato);
           tr.appendChild(td);
           //llamr manejador
           agregarManejadorTD(td);
        }

        if (element.hasOwnProperty("id")) {
            tr.setAttribute("data-id",element["id"]);
        }
        tbody.appendChild(tr);
        
    });
    return tbody;
    
}

function agregarManejadorTD(td) {
    if (td) {
        td.addEventListener("click", (e)=>{
            itemSeleccionado = e.target.parentNode.dataset.id;
            console.log("el id seleccionado es: "+itemSeleccionado);
        });
    }
}


