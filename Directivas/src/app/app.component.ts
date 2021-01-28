import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directivas';

  propiedadesParrafo: any;

  mostrarParrafo: boolean;

  constructor(){
    this.propiedadesParrafo = {
      color: 'red',
      fontSize: '24px'
    };
    this.mostrarParrafo= true;


  }

  cambiaColor(color: string){

    switch (color) {
      case 'a':
        this.propiedadesParrafo.color = 'yellow';
        break;
      case 'r':
        this.propiedadesParrafo.color = 'red';
        break;
      case 'v':
      this.propiedadesParrafo.color  = 'green';
      break;

      default:
        break;
    }
  }

  onChange($event: any){
    //console.log($event.target.value);

    this.propiedadesParrafo.fontSize = `${$event.target.value}px`;
  }

  onClickMostrar(){
    this.mostrarParrafo = !this.mostrarParrafo;
  }
}
