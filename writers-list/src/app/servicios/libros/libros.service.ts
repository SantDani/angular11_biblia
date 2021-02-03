import { Libro } from './../../models/libros.model';
import { LIBROS } from './../../db/libros.db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {


  constructor() { }

  getLibros(){
    return LIBROS;
  }

  getPromiseLibrosByAutor(atuorId: number): Promise<Libro[]>{

    return new Promise((resolve, reject) =>{
      const arrayTemp = LIBROS.filter( libro =>{
        return libro.escritor === (Number) (atuorId);
      });
      resolve(arrayTemp);
    });

  }
}
