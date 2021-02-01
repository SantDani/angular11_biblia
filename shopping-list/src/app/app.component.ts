import { Product } from './models/product.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';

  products : Product[];


  constructor(){
    this.products = [];
  }
  lisenerNewProduc($event: Product){
    console.log("Nuevo Producto add  -- " + $event.name);
    this.products.push($event);
  }

  lisenerBuyProduct($event: Product){
    console.log ("Producto compado" + $event.name);
    $event.buyed = true;

  }
}
