import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// necesario para pipes register locale
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core'; // para providers

registerLocaleData(localeEs); // necesario

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyPipeComponent } from './component/currency-pipe/currency-pipe.component';
import { DecimalPipeComponent } from './component/decimal-pipe/decimal-pipe.component';
import { DatePipeComponent } from './component/date-pipe/date-pipe.component';
import { PercentPipeComponent } from './component/percent-pipe/percent-pipe.component';
import { JsonPipeComponent } from './component/json-pipe/json-pipe.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipeComponent,
    DecimalPipeComponent,
    DatePipeComponent,
    PercentPipeComponent,
    JsonPipeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
