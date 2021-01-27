import { Task } from './../models/tarea.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' , ]
})
export class AppComponent {
  title = 'MiPrimeraApp';
  campoTexto: string;

  titulos: string[];

  num: number[];

  tasks: any[] ;

  persona: any;

  textoRoot: string;

  constructor(){
    this.titulos = ['Capitan america, el primer vengador', 'Capitana marvel', 'Iron man 2'];

    this.num = [1, 2, 3, 4, 5];

    this.campoTexto = 'Default campo texto';

    this.persona = {}; // Objeto vacio

    this.tasks = [];

    this.textoRoot ='Soy el padre ROOT';

  }

  ngOnInit(){
    let cont = 0;
    setInterval(()=>{
      this.textoRoot = `Texto ${cont++}`
    },2000 )
  }
  onAlertaPulsada($event: any){
    //console.log('ALerta pulsada! de root');
    console.log($event);

  }

  onAlertaCronometroFinalizado($event:any){
    console.log($event);
  }

  onChangeValue(){
    this.campoTexto = ' Button click';
  }

  lisenNewTask($event : any){
    //this.tasks += $event
    console.log("evento esuchado -- " + $event);
    this.tasks.push($event);

  }
}
