import { Task } from './../../models/tarea.models';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css', './../app.component.css']
})
export class FormularioComponent implements OnInit {

  //tarea: any;
  newTask : Task;
  titulo : string;
  descripcion : string


  @Output() eventNewTask : EventEmitter<Task>;

  constructor() {
    this.titulo = 'Nombre de tu tarea';
    this.descripcion = 'Describe tu tarea';
    this.newTask = new Task();

    this.eventNewTask = new EventEmitter();
   }

  ngOnInit(): void {
  }

  sendTask(){
    this.eventNewTask.emit(this.newTask);
    this.newTask = new Task();
  }
}
