import { AgmCoreModule } from '@agm/core';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaLibreriaComponent } from './mapa-libreria/mapa-libreria.component';
import { MapaNativoComponent } from './mapa-nativo/mapa-nativo.component';

//import API Key
import apiKey from './../../apiKeyMaps.json';
@NgModule({
  declarations: [
    AppComponent,
    MapaLibreriaComponent,
    MapaNativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: apiKey.GoogleMaps.apiKey
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(){
    console.log(apiKey);

  }

}
