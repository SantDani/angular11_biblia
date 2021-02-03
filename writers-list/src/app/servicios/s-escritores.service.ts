import { Escritor } from './../models/escritor.model';
import { ESCRITORES } from './../../db/escritores.db';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SEscritoresService {

  escritores : Escritor[];
  paises : string[];
  constructor() {
    this.escritores = ESCRITORES;

    this.getPaisesService();
  }

  private getPaisesService() {

    this.paises = [];

    for (const escritor of this.escritores) {
      //console.log(escritor.pais);
      //this.paises.push(escritor.pais);
      if(!this.checkIfExists(escritor.pais)){
        this.paises.push(escritor.pais);
      }

    }
    //console.log("end paises  " + this.paises);
  }
  getEscritores(){
    return this.escritores;
  }

  getPaises(){
    return this.paises;
  }

  getEscritorsFrom(pais : string): Promise<Escritor[]>{
    return new Promise((resolve, reject) =>{

      const arrayTemp = this.escritores.filter(escritor =>{
        return escritor.pais == pais;
      });

      resolve(arrayTemp);
    });
  }
  getEscritorById(id: number): Promise<Escritor[]>{
    return new Promise((resolve, reject) =>{

      const arrayTemp = this.escritores.filter(escritor =>{
        console.log("escirotr.id = " + escritor.id + "??" + id);
        console.log("resultado " + (escritor.id === id));

        return escritor.id == id;
      });

      resolve(arrayTemp);
    });

  }

  checkIfExists(paisEscritor:string) : boolean{
    return this.paises.some((pais)=>{
            return pais === paisEscritor
            });


  }

}
