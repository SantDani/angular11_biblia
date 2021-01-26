import { EventosComponent } from './../eventos/eventos.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  expresion: string;
  resultado: number;
  calculoFinalizado : boolean;

  constructor() {
    this.expresion = "";
    this.resultado = 0;
    this.calculoFinalizado = false;
  }

  ngOnInit(): void {
  }

  getButton($event : any){

    console.log($event.target.value);
    //this.expresion += $event.target.value;

    if(this.calculoFinalizado){
      this.expresion = $event.target.innerText;
      this.calculoFinalizado = false;
    }else{
      this.expresion += $event.target.innerText;
    }


  }

  resolve(){

    this.expresion = eval(this.expresion);
    this.calculoFinalizado = true;

  }



  clear(){
    this.expresion = '';
  }
}
