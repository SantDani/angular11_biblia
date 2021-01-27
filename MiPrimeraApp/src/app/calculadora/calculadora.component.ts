import { EventosComponent } from './../eventos/eventos.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  expresion: string;

  calculoFinalizado : boolean;

  constructor() {
    this.expresion = "";

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

  getKey($event:any){
    console.log($event.key);

    if($event.key == 'Enter'){
      console.log('EVALUAR = ' +  this.expresion)
      this.expresion = eval(this.expresion);
      this.calculoFinalizado = true;
    }

  }

  clear(){
    this.expresion = '';
  }
}
