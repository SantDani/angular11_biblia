import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css', './../app.component.css']
})
export class FormularioComponent implements OnInit {

  tarea: any;

  titulo : string;
  descripcion : string


  @Output() eventNewTask : EventEmitter<string>;

  constructor() {
    this.titulo = 'Nombre de tu tarea';
    this.descripcion = 'Describe tu tarea';
    this.tarea = {};

    this.eventNewTask = new EventEmitter();
   }

  ngOnInit(): void {
  }

  sendTask(){
    this.eventNewTask.emit(`${this.tarea.nombre} - ${this.tarea.descripcion} || ` );
  }
}
