import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input() valContador: number;
  contadoror : number;
  contadorFinalizado : boolean;

  @Output() alertaEndCronometro : EventEmitter<string>;

  constructor() {
    this.contadorFinalizado = false;
    this.valContador = 10;
    this.contadoror = 10;
    this.alertaEndCronometro = new EventEmitter();

  }

  ngOnInit(): void {
    this.contadoror = this.valContador ? this.valContador : 7;
  }

  start():void{

    let interval = setInterval( () =>{

      console.log(this.contadoror);
      if(this.contadoror > 0){
          this.contadoror = this.contadoror  - 1 ;
      }else{
        clearInterval(interval)
        this.contadoror = this.valContador;
        this.emitEndCronometro();
      }


    }, 1000)
  }

  emitEndCronometro(){
    this.alertaEndCronometro.emit('Conometro Finalizado, con contador ' + this.contadoror);
  }



}
