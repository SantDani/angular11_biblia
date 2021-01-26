//Boolean
let esValido;
esValido = false;
// Number
let edad = 12; //tambien se pueden expresar numeros con decimales
// String 
let nombre = ' Pepe Lopez';
let apellido = 'Apellido';
//template string
let nombre_completo = `${nombre} ${apellido}`;
//Array
let numeros = [1, 2, 3, 4, 5];
let numero2 = [3, 1, 65, 2];
// Tupla, es un array de dos posiciones. HOLA DICCIONARIO ?
let sitio = ['Casa', 87481];
// Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = -1] = "Offline";
    Estado[Estado["Indefinidio"] = 0] = "Indefinidio";
    Estado[Estado["Online"] = 1] = "Online";
})(Estado || (Estado = {}));
let estado = Estado.Online;
console.log(Estado.Offline); //  Offline = -1
console.log(Estado.Indefinidio);
console.log(estado);
//Unknow 
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = true;
let nuevaCadena = 'esto es una cadena';
//nuevaCadena = sinTipo; // no se puede asignar pq sinTipo es Unknow
//Any
let tipoIndefinido = 'esto es un mensaje';
nuevaCadena = tipoIndefinido; // iSI se puede asignar a una variable tipada pq es type = any
// Void
function logger() {
    console.log('Logger');
}
