import { LibrosService } from './../servicios/libros/libros.service';
import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libros.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  libros: Libro[];
  constructor(private librosService: LibrosService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdAuthorFromURL();

  }
  async onShowLibros(autorId: number){
    this.libros = await this.librosService.getPromiseLibrosByAutor(autorId);
  }


  getIdAuthorFromURL(){
    console.log("componente Libro");
    // RUTING children , EJEMPLO ROUTING hijo
    this.activateRoute.parent.params.subscribe(  concreteSubscribers=>{

      console.log(concreteSubscribers);
      console.log(concreteSubscribers.escritorId);

      this.onShowLibros(concreteSubscribers.escritorId);
    });
  }
}
