import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        'background-color': 'red'
      })),
      state('amarillo', style({
        'background-color': 'yellow',
        'transform': 'scale(2)'
      })),
      state('verde', style({
        'background-color': 'green'
      })),
      // estado  void es el estado inicial del componente
      transition('void => *', [
        style({
          'transform': 'translateX(-100%)'
        }),
        animate(1000)
      ])
      //  transition('* => * ', animate(500))
      // transition('rojo=>verde ', animate(1000)),
      // transition('verde=>amarillo ', animate(1000)),
      // transition('amarillo=>rojo ', animate('.5s ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'Animations';

  color: string;

  constructor(){
    this.color = 'verde';
  }

  ngOnInit(){

    setInterval(()=> {
      if(this.color === 'rojo'){
        this.color = 'verde';
      }else if(this.color === 'amarillo'){
        this.color = 'rojo';
      }else if(this.color === 'verde'){
        this.color = 'amarillo';
      }
    }, 2000);
  }
}
