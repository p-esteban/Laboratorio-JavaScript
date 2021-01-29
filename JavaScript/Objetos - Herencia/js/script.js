// crear clase empleado
// nombre
// apellido
// cedula
// edad
// estado civil
// salario

class Persona{

    constructor(nombre,apellido,cedula,edad, casado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.edad = edad;
        this.casado = casado;
       
    }
}

class Empleado extends Persona{

   
    constructor(nombre,apellido,cedula,edad, casado, salario){
       super(nombre,apellido,cedula,edad, casado)
        this.sueldo = salario;
    }

    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
    seniority(){
        let escala;
        //verificar si la edad cumple la condicion
        if (this.edad < 21 ) {
            escala = "junior";
        }else if (this.edad >= 21 && this.edad <= 34) {
            escala = "intermedio";
        }else {
            escala = "senior";
        }
        return escala;
    }

    mostrar(){
        return `Hola soy ${this.nombreCompleto()} y mi seniority es ${this.seniority()}  ${this.casado?"estoy casado":"soy soltero"} `;
    }

    toString(){
       return `Hola soy ${this.nombre} y tengo ${this.edad} años `;
    }

    aumentarSalario(porcentaje){
        let aumento = this.sueldo * porcentaje;
        this.sueldo += aumento;  
    }

    

}

class Cliente extends Persona{
    constructor(nombre,apellido,cedula,edad, casado, cuil){
        super(nombre,apellido,cedula,edad, casado)
         this.cuil = cuil;
     }

     
}
       


const e2 = new Empleado("Juan","Perez",123456,27,true,18000);
const e3 = new Empleado("Maria","Perez",123456,40,true,18000);
const e4 = new Empleado("pepe","Perez",123456,40,true,18000);
const e5 = new Empleado("otro","Perez",123456,40,true,18000);


const empleados=[];

empleados.push(e2);
empleados.push(e3);
empleados.push(e4);
empleados.push(e5);

console.table(empleados);


// Jugador:

//dni
//nombre
//partidosJugados
//promedioGoles
// totalGoles

// getPromedioDeGoles()
//MostrarDatos() muestra los atos del juagdor y sus datos estadisticos

// Equipo:
// cantidadDeJugadores
//jugadores Array
//nombre

// a. Todos los datos estadísticos del Jugador se inicializarán en 0 dentro del constructor .
// b. El promedio de gol sólo se calculará cuando invoquen al método GetPromedioGoles.
// c. MostrarDatos retornará una cadena de string con todos los datos y estadística del Jugador.

// d. Dos jugadores serán iguales si tienen el mismo DNI.
// Equipo:
// e. La lista de jugadores se inicializará sólo en el constructor  de Equipo.
