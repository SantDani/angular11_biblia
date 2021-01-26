import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() {

    this.mensaje = 'Mensaje inicial';
   }

  ngOnInit(): void {
  }

  onClickMio($event: Event){

    console.log(' Se ha pulsado el button');
    console.log($event);
  }

  getSelect($event: any){
      ($event.target)
    console.log($event.target.value);
    console.log($event);
  }

  mouseOnDiv(){
    console.log('Entro en el div');

    this.mensaje = 'Estas dentro... xd';

  }

  moseOutDiv(){
    this.mensaje = 'Wey no huyas!!';

  }

  changeInput($event: any){

    //console.log($event.target.value);

  }

  onInput($event: any){
    console.log($event.target.value);
    this.mensaje = $event.target.value;
  }

  onFocus(){
    console.log(' ESTA FOCUSEADO!')
  }

  onBlur(){
    console.log(' NO! se perdido el foco...')
  }
}
