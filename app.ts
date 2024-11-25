// ------------- Tipado de datos estatico y dinamico ---------------

/* Tipado dinamico

let numero = "Dos";
numero = 2; ------> Esto en javascript no estaria dando error (Tipado debil)

*/

/* Tipado estatico

let numero = "tres";
numero = 3; -----------> Esto en typescript seria un error (Tipado fuerte)

*/

/*let numero = "Tres";
numero = "Dos";*/

// Codigo typesript

function saludar(saludo: string){
    return saludo
}

console.log(saludar("Hola mundo, desde typescript"));

// ---------- Tipos de datos
// Em typescript incluye tipos de datos primitivos y compuestos

//Tipos de datos primitivo

let numero: number = 100;
let texto: string = "Buenas";
let booleano: boolean = false;

// Tipos de datos compuestos

let persona: {nombre:string,apellido:string,correo:string,edad:number} = {
    nombre: "Yenetson",
    apellido: "Rondon" ,
    correo: "yrondon757@gmail.com",
    edad: 33
};

let arreglo: number [] = [1,2,3,4,5,6,7,8,9,10];
let arrgeglo2: Array<string> = ["a","b","c","d","f","g","h","i","j"];


// Tipos de datos en funciones

// Funcion con tipos

function suma(a:number,b:number):number{
    return a + b;
}

suma(1,7);

// Funcion flecha

const saludo = (saludo:string):string => {
    return saludo;
}

// Parametros opcionales

function saludo2(nombre:string, saludo?:string):string {
    return saludo ? `${saludo} ${nombre}` : `Hola ${nombre}`
}; // ? Hace que el parametro saludo sea opcional, no habra problema si pasa o no

saludo2("Yenetson");
saludo2("Yenetson", "Buenas Noches");

// Rest parameters (...)

function concatenar(...elementos:string[]):string{ // ["Hola", "Como", "Estas"]
    console.log(elementos);
    return elementos.join(" ");
}

console.log(concatenar("Buenas noches", "Como estas", "espero que bien."));

// -------- INTERFACES
// Esto permite que se pueda utilizar varias veces y ademas reducir el codigo

interface Persona{
   nombre: string;
   apellido: string;
   correo: string;
   edad: number;
   ciudad: string;
};

let usuario : Persona = {
    nombre: "Yenetson",
    apellido: "Rondon" ,
    correo: "yrondon757@gmail.com",
    edad: 33,
    ciudad: "Caracas"
};

// Podemos crear tipos de datos

type Prueba = string | number;
type Yenetson = "Yenetson";
function func(saludo:Prueba):Prueba{
    return saludo;
};

func("Buenos dias");
func(20);

function resultadoRandom(item:string):void{
    console.log(item);
}

resultadoRandom("hola");

// any = Cualquier tipo de dato.
// void = Para no retornar nada.
// typeof = Es para saber el tipo de una variable

let variable = 33;
console.log(typeof variable);

// Manejo del dom

const miElemento: HTMLElement | null = document.getElementById("mi-elemento");