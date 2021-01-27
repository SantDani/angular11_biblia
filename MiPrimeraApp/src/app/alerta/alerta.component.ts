import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core'; // Iimporat Output


@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  /**Input me permite modificar el valor que yo quiera desde su padre
   * Por el ciclo de vida de Input, este no esta aún disponible en el constructor,
   * pero si que estara disponible en el ngOnInit.
   */
  @Input('namePersoInput') mensaje: string;
  @Input() subtitulo: string;

  /**Output: se ha de importar al principio de todo  y tambien EventEmitter*/
  @Output() alertaPulsada: EventEmitter<string>;

  constructor() {
    this.mensaje = 'mensaje inicial por defecto';
    this.subtitulo = 'subitutulo default';

    this.alertaPulsada = new EventEmitter();

  }

  onClick(){
    this.alertaPulsada.emit('Alerta ha sido pulsada desde componente alerta, EL HIJO WEY, bastardo...')
  }


  ngOnInit(): void {
  }

}
