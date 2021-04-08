import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
// Import forms
import {FormsModule}  from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormProductComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
