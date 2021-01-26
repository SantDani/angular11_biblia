interface Persona{
    // indico que propiedades ha de implementar personas
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona){
    console.log(pPersona);
}

mostrarPersona({nombre : 'Rosa', apellido: ' Garcia', edad : 45})


//Propiedades opcionale
interface Coche{
    marca: String;
    modelo: String;
    color?: String;
}

function mostrarCoche(pCoche: Coche){

    console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
    if(pCoche.color){
        console.log(`Color: ${pCoche.color}`);
    }else{
        console.log('Este coche no tiene color')
    }
}

mostrarCoche({marca: ' Mercedes', modelo: '123'});
mostrarCoche({marca: ' Mercedes', modelo: '123', color: 'rojo'});

// Propiedades de solo lectura

interface Punto{
    readonly x: number; // read only = propiedad que solo se puede leer, es decir, no se puede modificar
    readonly y: number;
}

let p1 : Punto = {x: 121, y: 84};
//p1.x = 45 // no se puede pq es readOnly

//Definir una función

interface Busqueda{
    (valor: string, buscar: string): boolean;

}

const miBusqueda : Busqueda = (v: string, b: string): boolean =>{
    //TODO hay algo que no chuta vien, Search devuelve la posicion en la que encuentra la cadena que coincide 
    const result = v.search(b); // Si encuntra resultado sera mayor que 1
    console.log(`Resultado de  ${v} VS ${b}  = ${result}`);
    return result > -1; // Devuelvo -1 si no encuentro la cadena b
}

console.log(miBusqueda ('k3', ' 3'));
console.log(miBusqueda ('k mas ve', ' ACM1PT '));

// Interfaz en una clase

interface Humano {
    nombre : string;
    edad : number;
}

class Adulto implements Humano{
    nombre: string;
    edad: number;
    coche: boolean;

    constructor(pNombre: string, pEdad: number, pCoche: boolean){

        this.coche = pCoche;
        this.nombre = pNombre;
        this.edad = pEdad;
    }
}

class Nino implements Humano{
    nombre: string;
    edad: number;
    colegio: string;

}