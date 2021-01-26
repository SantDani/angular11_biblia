// Asi se declariari en JS
// function sumar(a,b){
//     return a + b;
// }
// Declaracion en TypeScript
//HUELE PESTE
// declaramos, todo tanto en la costante y en la funcion
const sumarMEH = function (a, b) {
    return a + b;
};
// mejor opcion, es la que suele utilizar MAS
const sumar = function (a, b) {
    return a + b;
};
// otra opcion, que no definimos los parametros en la funcion
const sumarMEH2 = function (a, b) {
    return a + b;
};
// Funciones basicas de JS
//Parametros opcionales y valaroes por defecto
// Gomez es el valor por defecto
//Coche es el valor opcional
function nombreCompleto(nombre, apellido = 'Gomez', coche) {
    if (apellido)
        return nombre + " " + apellido + " no tiene coche ";
    else
        return nombre + " " + apellido + " tiene coche " + coche;
}
console.log(nombreCompleto('Pedro'));
console.log(nombreCompleto('Pedro', ' apellido'));
console.log(nombreCompleto('Pedro', ' apellido', true));
// Parametros REST o parametros infinitos like array
function nombreCompleto2(nombre, ...restoNombre) {
    return nombre + " " + restoNombre.join(' '); // Con JOIN unimos los elementos del string,
    // donde cada elemento se va a juntar con el valor que se envia a la funcion
    // este caso con un espacio
}
console.log(nombreCompleto2('Santiago', 'Daniel', 'Rodiguez', 'Posligua'));
