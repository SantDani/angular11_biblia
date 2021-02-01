import { Product } from './../models/product.models';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  newProduct : Product;
  @Output()
  outputEventNewProduct : EventEmitter<Product>;

  constructor() {
    this.newProduct = new Product();
    this.outputEventNewProduct = new EventEmitter();
   }

  ngOnInit(): void {

  }

  sendNewProduct(){
    this.outputEventNewProduct.emit(this.newProduct);
  }
}
