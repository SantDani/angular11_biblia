import { Component, OnInit } from '@angular/core';

//Decorador propio de angular
// indica que ya no es una clase typescript, se ha convertido en un compnente de angular
@Component({
  /**selector: propiedad que nos permite utilizar este componente
   * en cualquier punto de la applicacion con el tag <saludo></saludo>. */
  selector: 'saludo',

  /** templateUrl indicamos que fichero HTML va tener este componente,*/
  templateUrl: './saludo.component.html',
  /**Template: nos permite poner directamente el codigo HTML */
  //template: '<h1> k mas ve </h1>',

  /** `` comillas abiertas nos permite realizar un template literal,
   * que nos permite salto de linea */
  // template: `<h1> k mas ve </h1>
  // <h2>subtitulo<h2>`,

  /**styleUrls: alberga una array de hojas de estilo,
   * esto permite encapsular estilos
   */
  styleUrls: ['./saludo.component.css']
  //style: [`codigo CSS. Funciona igual que la propiedad template.`]
})

/**Clase de Type script. */
export class SaludoComponent implements OnInit {

  /**Las variables tienen que estar inicializadas  */
  mensaje: string ;
  idParrafo: string;
  idInput: string;

  constructor() {
    this.mensaje = 'Se los va a garchar a todos';
    this.idParrafo = 'parrafoPrincipal';
    this.idInput = 'button';

    setTimeout (() => {
      this.mensaje = 'Garchados en 3 s, easy';
      this.idParrafo = 'idCambiado';
      this.idInput = 'password';

    }, 3000)
   }

  ngOnInit(): void {
  }

  mostrarSaludo(): string{

    return 'k mas ve, vengo de una funcion';
  }

}
