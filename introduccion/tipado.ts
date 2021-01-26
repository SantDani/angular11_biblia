//Boolean
let esValido: boolean;
esValido = false;

// Number
let edad : number = 12; //tambien se pueden expresar numeros con decimales

// String 
let nombre : string = ' Pepe Lopez';
let apellido : string =  'Apellido';

//template string

let nombre_completo: string = `${nombre} ${apellido}`;

//Array
let numeros : number[] = [1, 2, 3, 4, 5];
let numero2 : Array<number> = [3, 1, 65, 2];

// Tupla, es un array de dos posiciones. HOLA DICCIONARIO ?
let sitio : [string, number] = ['Casa', 87481];

// Enum
enum Estado {
    Offline = -1, 
    Indefinidio,
    Online
}

let estado: Estado = Estado.Online;

console.log(Estado.Offline); //  Offline = -1
console.log(Estado.Indefinidio);
console.log(estado);

//Unknow 
let sinTipo: unknown = 'Hola';
sinTipo = 32;
sinTipo = true;

let nuevaCadena : string = 'esto es una cadena';
//nuevaCadena = sinTipo; // no se puede asignar pq sinTipo es Unknow

//Any

let tipoIndefinido : any = 'esto es un mensaje';
nuevaCadena = tipoIndefinido; // iSI se puede asignar a una variable tipada pq es type = any

// Void

function logger(): void {
    console.log('Logger');
}