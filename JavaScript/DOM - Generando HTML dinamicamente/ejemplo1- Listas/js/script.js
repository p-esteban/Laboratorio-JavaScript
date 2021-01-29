let form = document.forms[0];

//console.log(document.forms);
form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
});




let btnAgregar = document.getElementById("btnAgregar");



let listaProductos = [];

const divLista = document.getElementById("listaDatos");
function crearLista(productos) {
    
    

    const lista = document.createElement('ul');
    // lista.setAttribute("id","listaDinamica");

    productos.forEach(element => {
         const item = document.createElement('li');
         const texto = document.createTextNode(element);
         item.appendChild(texto);
         lista.appendChild(item);
    });
    return lista;
}

window.addEventListener("load",()=>{
    listaProductos = JSON.parse( localStorage.getItem("listaDeProductos"));

    divLista.appendChild(crearLista(listaProductos));

});


btnAgregar.addEventListener("click",()=>{

    let productoIngresado = document.getElementById("producto").value;

    listaProductos.push(productoIngresado);

     divLista.innerHTML = "";

    // while(divLista.hasChildNodes()){
    //     divLista.removeChild(divLista.firstElementChild);
    // }
localStorage.clear();
localStorage.setItem("listaDeProductos", JSON.stringify(listaProductos));
    divLista.appendChild(crearLista(listaProductos));

});

localStorage.getItem("listaDeProductos");


