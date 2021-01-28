import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas: any[];
  constructor() {
    this.personas = [
      {nombre: 'Mario0', apellidos: 'Apellido0', edad: 36, calle:'falsa 0', tel:'000'},
      {nombre: 'Mario1', apellidos: 'Apellido1', edad: 36, calle:'falsa 1', tel:'111'},
      {nombre: 'Mario2', apellidos: 'Apellido2', edad: 36, calle:'falsa 2', tel:'222'},
      {nombre: 'Mario3', apellidos: 'Apellido3', edad: 36, calle:'falsa 3', tel:'333'},
      {nombre: 'Mario4', apellidos: 'Apellido4', edad: 36, calle:'falsa 4', tel:'444'}
    ];
  }

  ngOnInit(): void {
  }

  addPerson(){
    this.personas.push(
      {nombre: 'MarioXX', apellidos: 'ApellidoXX', edad: 100, calle:'falsa XX', tel:'XXX'}
    )
  }

}
