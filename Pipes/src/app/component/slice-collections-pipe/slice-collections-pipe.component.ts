import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slice-collections-pipe',
  templateUrl: './slice-collections-pipe.component.html',
  styleUrls: ['./slice-collections-pipe.component.css']
})

 /*
  De un array que este creado, nos permite mostrar
  solo aquello queramos
  */
export class SliceCollectionsPipeComponent implements OnInit {



   animales: string[];
   min: number;
   max: number;
  constructor() {
    this.animales = ['perro', 'gato', 'ganso', 'elefante', 'oso'];
    this.min = 0;
    this.max = this.animales.length ;
  }

  ngOnInit(): void {
  }

}
