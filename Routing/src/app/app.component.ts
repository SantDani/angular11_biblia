import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';

  constructor(private router: Router){
    /**
     * // se tiene que pasar muchos parametros con new Router();
     *
     * La solucion es la inyecion de dependencias.
     *    router es la inyecion, se hace en el constructor
     * Se le pide a angular una instancia de Router.
     * */
    //const router = new Router();
  }
  //Necesitamos el objeto Router
  onClick(pRuta: string){

    //Tareas previas
    console.log('Se realizan las tareas previas');
    //vamos a hacer la navegacion
    this.router.navigate([pRuta]);
  }
}

