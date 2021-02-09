import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  templateUrl: './json-pipe.component.html',
  styleUrls: ['./json-pipe.component.css']
})
export class JsonPipeComponent implements OnInit {

  // JSON pipe
  estudiante: any;
  constructor() {
    this.estudiante = {
      nombre: 'Armando',
      Apellidos: ' Guerra Segura',
      notas: [8, 8, 7, 10]
    };
  }

  ngOnInit(): void {
  }

}
