/* Estuctura basica o Esqueleto de la apliación, Arquitectura */


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importado para video 40 . Two way binding
import {FormsModule}  from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { EventosComponent } from './eventos/eventos.component';
import { SumadorComponent } from './sumador/sumador.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { AlertaComponent } from './alerta/alerta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
/**
 * NgModule es un DECORADOR
 *
 * esta convirtiendo a la simple classe AppModule de JS,  en un modulo de angular y
 * le da las caracteristicas definidas en NgModule
 *
 *
 */

 /*

  - Declarations  (Automatico): tienen que estar reflejada todos los componentes, directivas ..., aunque,
   se realiza de manera automatica, nos tenemos que asegurarq ue esten
   - Imports  (MANUAL): se ponen los modulos nuevos.
   - Prividers: servicios
   - bootstrap : cual va a ser el elemento principal a partir del  cual se ejcuta la app.

 Componente principal: a partir de este se crea la jerarquia de elementos
 que van a crear la app.
 En este caso se trata de "AppComponent"*/
@NgModule({
  declarations: [
    // componente principal
    AppComponent,
    SaludoComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component,
    EventosComponent,
    SumadorComponent,
    CronometroComponent,
    CalculadoraComponent,
    AlertaComponent,
    FormularioComponent,
    ListaComponent,
    CicloVidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
