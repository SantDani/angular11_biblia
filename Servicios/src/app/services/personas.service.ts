import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

/**
 * Decorador @Injectable que indica que va a estar dispoinible a todos
 * los componentes de la aplicacion
 */

  //servicio singleton
  /**
   * @providedIn : root
   *  hace que comparta a todos los compnentes de la app.
   *
   * Para que cada componente tenga su propio array de personas comentamos
   */
  //providedIn: 'root'
@Injectable()
export class PersonasService {

  personas: Persona[];

  constructor() {
    this.personas = [];
    this.personas.push(new Persona('Mario', 'Rodríguez', 32 , true));
    this.personas.push(new Persona('Rocío', 'García', 15 , false));
    this.personas.push(new Persona('Laura', 'Robles', 18 , true));
    this.personas.push(new Persona('lorenzo', 'Romero', 65 , true));
  }


  getAll(){
    return this.personas;
  }

  create(personaNueva: Persona){
    this.personas.push(personaNueva);
  }

  activos(): Promise<Persona[]>{

    const promesa = new Promise<Persona[]>((resolve, reject) =>{
      const arrayTemporal: Persona[] = [];
      for (let persona of this.personas) {
        if(persona.activo){
          arrayTemporal.push(persona);
        }
      }
      resolve(arrayTemporal);
    });
    return promesa;
  }

  activosV2(): Promise<Persona[]>{

    return new Promise((resolve, reject) =>{
      /**
       * @func filter() es como la funcion find
       */
      const arrayTemp = this.personas.filter(persona =>{
        return persona.activo;
      });
      resolve(arrayTemp);
    });
  }
}
