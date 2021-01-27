import { Task } from './../../models/tarea.models';
import { Component, Input, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css', './../app.component.css']
})
export class ListaComponent implements OnInit {

  //@Input() a: number;
  //@Input() a: number;

  @Input()
  inputTasks: Task[] ;

  taskShow: string;
  constructor() {
    this.inputTasks = [];
    this.taskShow = '';
  }

  ngOnInit(): void {
      //console.log( "log list de input task  -- " + this.inputTasks + " -- end task");
  }


  ngOnChanges( changesSimple: any) : void{
    console.log( "log list de input task  -- " + this.inputTasks + " -- end task");
    console.log("***Estoy en ongOnChanges");
    console.log(changesSimple);
    this.mostrarTareas();


   }

  ngAfterViewInit(){
    console.log("Me ejecuto cuando el HTML esta visible");
    console.log("\tLo uso para lanzar acciones iniciales dentro de la plantilla");

  //   let resultado = '<ul>'
  //  for (let tarea of this.inputTasks){
  //    resultado += `<li> ${tarea.titulo} - ${tarea.descripcion}</li>`
  //  }
  //   resultado += '</ul>';
  //   this.taskShow = resultado;
    //return resultado;

  }
  mostrarTareas(){

    let resultado = '<ul>';
    let tarea : any;
   for (tarea   of this.inputTasks){
     resultado += `<li> ${tarea.titulo} - ${tarea.descripcion}</li>`;
   }
    resultado += '</ul>';
    this.taskShow = resultado;
    return resultado;
    //return '';
  }
}
