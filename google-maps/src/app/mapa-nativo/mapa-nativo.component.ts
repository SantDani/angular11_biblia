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

  markers: google.maps.Marker [];
  constructor() {
    this.markers = [];
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
        this.cargarAutoComplete();
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

    // Icono, da personalizacion

    const dogeIcon = {
      url: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547792256',
      scaledSize: new google.maps.Size(50, 50)
    };

    // crear marcadores
    const markerPosition = new google.maps.Marker({
      position: this.mapa.getCenter(),
      // animation: google.maps.Animation.BOUNCE // lugar donde vamos a posicionar el marcador
      animation: google.maps.Animation.DROP, // lugar donde vamos a posicionar el marcador
      icon: dogeIcon
    });

    markerPosition.setMap(this.mapa);

    // eventos sobre el mapa
    google.maps.event.addListener(this.mapa, 'click', (event: google.maps.MouseEvent) => {
      const marker = new google.maps.Marker({
        position: event.latLng,
        animation: google.maps.Animation.DROP
      });


      marker.setDraggable(true);
      marker.setMap(this.mapa);

      this.markers.push(marker); // creamos un array de marcadores
      // eventos en marcadores

      google.maps.event.addListener(marker, 'click', (event: google.maps.MouseEvent) => {
        marker.setMap(null); // null elimina el marcador al pulsar sobre el marcador
      });

      google.maps.event.addListener(marker, 'mouseover', (event: google.maps.MouseEvent) => {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      });

      google.maps.event.addListener(marker, 'mouseout', (event: google.maps.MouseEvent) => {
        marker.setAnimation(null); // elimino la animacion al marcador
      });

      // eliminar todos los marcadores
    });
  }

  borrarMarcadores(){
    for (const marker of this.markers) {
      marker.setMap(null);
    }
  }

  cargarAutoComplete(){
    const autoComplete = new google.maps.places.Autocomplete(
      document.querySelector('#inputPlaces')
    );

    google.maps.event.addListener(autoComplete, 'place_changed', event => {
      const place = autoComplete.getPlace();
      console.log(place);
      /* this.mapa.setCenter(place.geometry.location);

      const marker = new google.maps.Marker({
        position: place.geometry.location
      });

      marker.setMap(this.mapa); */

      this.calculaRuta(this.mapa.getCenter(), place.geometry.location,
        google.maps.TravelMode.WALKING);

    });
  }

  calculaRuta(
    pOrigen: string | google.maps.LatLng,
    pDestino: string | google.maps.LatLng,
    pModoViaje: google.maps.TravelMode = google.maps.TravelMode.DRIVING
  ){
    /* */

    const dirSerice = new google.maps.DirectionsService();
    const dirRendered = new google.maps.DirectionsRenderer();

    dirRendered.setMap(this.mapa);

    dirSerice.route({
      origin: pOrigen,
      destination: pDestino,
      travelMode: pModoViaje
    }, result => {
      console.log(result);
      dirRendered.setDirections(result);
    });
  }
}
