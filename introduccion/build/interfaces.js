function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Rosa', apellido: ' Garcia', edad: 45 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    else {
        console.log('Este coche no tiene color');
    }
}
mostrarCoche({ marca: ' Mercedes', modelo: '123' });
mostrarCoche({ marca: ' Mercedes', modelo: '123', color: 'rojo' });
let p1 = { x: 121, y: 84 };
const miBusqueda = (v, b) => {
    //TODO hay algo que no chuta vien, Search devuelve la posicion en la que encuentra la cadena que coincide 
    const result = v.search(b); // Si encuntra resultado sera mayor que 1
    console.log(`Resultado de  ${v} VS ${b}  = ${result}`);
    return result > -1; // Devuelvo -1 si no encuentro la cadena b
};
console.log(miBusqueda('k3', ' 3'));
console.log(miBusqueda('k mas ve', ' ACM1PT '));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.coche = pCoche;
        this.nombre = pNombre;
        this.edad = pEdad;
    }
}
class Nino {
}
