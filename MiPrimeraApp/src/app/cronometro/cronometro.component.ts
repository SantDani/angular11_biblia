import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  contadoror : number;
  constructor() {
    this.contadoror = 10;
  }

  start():void{

    let interval = setInterval( () =>{

      if(this.contadoror > 0){
          this.contadoror = this.contadoror  - 1 ;
      }else{
        clearInterval(interval)
      }

      console.log(this.contadoror);
    }, 1000)


  }


  ngOnInit(): void {
  }

}
