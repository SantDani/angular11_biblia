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
  productsBuyed : Product[];



  constructor(){
    this.products = [];
    this.products.push(new Product('Fajita', 50, 'Mexico'));
    this.products.push(new Product('Pan del dia', 1, '365'));
    this.products.push(new Product('Fanta', 50, 'Bebida'));
    this.products.push(new Product('Queso', 50, 'Lactios'));
    this.products.push(new Product('Kebab', 50, 'Amigo'));
    this.productsBuyed = [];
  }
  lisenerNewProduc($event: Product){
    console.log("Nuevo Producto add  -- " + $event.name);
    this.products.push($event);
  }

  lisenerBuyProduct($event: Product){
    console.log ("Producto compado " + $event.name);
    //$event.buyed = true;
    $event.buyed = true;
    this.productsBuyed.push($event);

  }

  lisenerDeleteProduct($event : Product){
    this.products.push($event);
  }
}
