import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumador',
  templateUrl: './sumador.component.html',
  styleUrls: ['./sumador.component.css']
})
export class SumadorComponent implements OnInit {

  a: number;
  b: number;
  resultado: number;


  constructor() {
    this.a = 10;
    this.b = 90;
    this.resultado = 0;
   }

  ngOnInit(): void {
  }

  sumar(){
    this.resultado = this.a + this.b
    return this.resultado;
  }

}
