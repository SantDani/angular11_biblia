// para poder interactuar con el mapa
// Para que en el .ts reconozca todos los elementos relacionados con maps
/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa-nativo',
  templateUrl: './mapa-nativo.component.html',
  styleUrls: ['./mapa-nativo.component.css']
})
export class MapaNativoComponent implements OnInit {

  @ViewChild('divMap')
  divMap!: ElementRef;

  mapa!: google.maps.Map;
  constructor() {

   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    if(navigator.geolocation){
      // navigator.geolocation.watchPosition(); // util para aplicaciones de runners
      navigator.geolocation.getCurrentPosition( position => {
        console.log(position);

        // esta funcion necesita el codigo HTML cargado para utilizar .naviveElement
        this.cargarMapa(position);
      });

    }else{
      console.log('Navegador no compatible con geolocalización');
    }

  }

  cargarMapa(position: GeolocationPosition){
    const opciones = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID // tipo de mapa que queremos visualizar
    };

    this.mapa = new google.maps.Map(this.divMap.nativeElement, opciones);
  }
}
