


class Persona {

 nombre;
 apellido;
 edad;
 direccion;
 idioma;

 constructor(nombre,apellido,edad,idioma,direccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.idioma = idioma;
    this.direccion = direccion;
 }

 saludar() {
     return "Hola";
 }
 //metodos get y set
 get nombreCompleto (){
     return this.nombre + " " + this.apellido;
 }
 toString(){
     return `Soy ${this.nombre} y tengo ${this.edad} años`;
 }
 
 
}

class Empleado extends Persona{

    constructor(nombre,apellido,edad,idioma,direccion,sector,sueldo){
        super(nombre,apellido,edad,idioma,direccion)
        
        this.sueldo = sueldo;
        this.sector = sector; 
    }
    toString(){
        return super.toString() + "y gano $"+  this.sueldo; 
    }

}


                
// let persona1 = new Persona("Juan","Perez",21,"español","calle falsa 123");
// let persona2 = new Persona("Pepe","Peposo",30,"ingles","adsdfds");

const programador = new Empleado("Juan","Perez",21,"español","calle falsa 123","sistemas",80000);
console.log(programador.toString());