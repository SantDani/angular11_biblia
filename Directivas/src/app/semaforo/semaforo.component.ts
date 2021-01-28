import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  cadenaClases: string;
  arrayClases: string[];

  colorSelecionado: string;
  constructor() {
    this.cadenaClases = 'rojo redondo';
    this.arrayClases = ['semaforo'];
    this.arrayClases.push('rojo');
    this.arrayClases.push('redondo');

    this.colorSelecionado= 'v';
  }

  ngOnInit(): void {

    setInterval(()=>{
      if(this.colorSelecionado ==='r'){
        this.colorSelecionado ='a';
      }else if (this.colorSelecionado ==='a'){
        this.colorSelecionado ='r';
      }else if(this.colorSelecionado==='v'){
        this.colorSelecionado= 'a'
      }
    }, 2000)
  }

}
