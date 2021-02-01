import { Product } from './../../models/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-registrer',
  templateUrl: './cash-registrer.component.html',
  styleUrls: ['./cash-registrer.component.css']
})
export class CashRegistrerComponent implements OnInit {

  productsComida: Product[];
  productsBebida: Product[];
  constructor() {
    this.productsBebida = [];
    this.productsComida = [];

  }

  ngOnInit(): void {
    this.productsComida.push(new Product('Cocido', 10.5, 'url'));
  }

}
