import { Component } from '@angular/core';
import { Persona } from './models/persona.model';
import { PersonasService } from './services/personas.service';

/**
 * @param peroviders - Singleton
 * Le estoy diciendo que app.components.ts tenga su propio objeto de PersonasService
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonasService]
})
export class AppComponent {
  title = 'Servicios';

  arrPersonas: Persona[];

  /**
   *
   * @param personasService es un servicio de datos, esta se hace por inyecion
   */
  constructor(private personasService: PersonasService){  }

  ngOnInit(){
    const personas = this.personasService.getAll();
    this.arrPersonas = personas;
    console.log( personas);
  }

  onClick(){
    this.personasService.create(new Persona('nueva', 'Apellido nuevo', 32, true));
  }

  onClickActivas(){
    this.personasService.activos()
    .then((arrrayTempPersonas => console.log(arrrayTempPersonas)) )
    .catch(error => console.log(error));
  }

  async onClickActivasAsyncAwait(){
    try{
      this.arrPersonas = await this.personasService.activosV2();
    }catch(error){
      console.log(error);
    }

  }
}
