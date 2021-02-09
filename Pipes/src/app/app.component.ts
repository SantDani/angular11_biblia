import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  texto: string;

  constructor(){
    this.texto = 'EN un lugar de la mancha';
  }
}
