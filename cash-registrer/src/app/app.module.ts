import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { CashRegistrerComponent } from './components/cash-registrer/cash-registrer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ListOrderComponent,
    CashRegistrerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
