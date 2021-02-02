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

  lisenerBuyProduct($event: number){

    const product = this.products.splice($event, 1);
    product[0].buyed = true;
    this.productsBuyed.push(product[0]);

  }

  lisenerDeleteProduct($event : number){

    const  product = this.productsBuyed.splice($event, 1);
    product[0].buyed = false;
    this.products.push(product[0]);
  }
}
