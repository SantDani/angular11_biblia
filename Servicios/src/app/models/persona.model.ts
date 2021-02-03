export class Persona{

  nombre : string;
  apellidos: string;
  edad: number;
  activo: boolean;

  constructor(nombre='', apellidos='', edad = 0, activo = false){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.activo = activo;
  }
}
