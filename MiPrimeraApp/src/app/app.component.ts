import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimeraApp';

  titulos: string[];

  num: number[];

  constructor(){
    this.titulos = ['Capitan america, el primer vengador', 'Capitana marvel', 'Iron man 2'];

    this.num = [1, 2, 3, 4, 5];
  }

  onAlertaPulsada($event: any){
    //console.log('ALerta pulsada! de root');
    console.log($event);

  }

  onAlertaCronometroFinalizado($event:any){
    console.log($event);
  }
}
