export class Task{

  titulo : string;
  descripcion : string;

  constructor(titulo = '' , descripcion = '' ){
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
