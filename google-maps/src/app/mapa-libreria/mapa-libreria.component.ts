import { PaisesService } from './../service/paises.service';
import { getLocaleDirection } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-libreria',
  templateUrl: './mapa-libreria.component.html',
  styleUrls: ['./mapa-libreria.component.css']
})
export class MapaLibreriaComponent implements OnInit {

  latitud: number;
  longitud: number;
  zoom: number;

  paises: any[];

  constructor(private paisesService: PaisesService) {
    this.latitud = 40;
    this.longitud = -3;
    this.zoom = 15;
   }

  ngOnInit(): void {

    this.getLocation();

    this.paisesService.getPaisesEuropeos()
    .then(response => {
      this.paises = response;
    })
    .catch(error => console.log(error));

  }
  getLocation() {

    navigator.geolocation.getCurrentPosition( positicon => {
      this.latitud = positicon.coords.latitude;
      this.longitud = positicon.coords.longitude;
    })
  }

}
