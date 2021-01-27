import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumador',
  templateUrl: './sumador.component.html',
  styleUrls: ['./sumador.component.css']
})
export class SumadorComponent implements OnInit {


  @Input() a: number;
  @Input() b: number;
  resultado: number;


  constructor() {
    this.a = 0;
    this.b = 0;
    this.resultado = 0;
   }

  ngOnInit(): void {
  }

  sumar(){
    this.resultado = this.a + this.b
    return this.resultado;
  }

}
