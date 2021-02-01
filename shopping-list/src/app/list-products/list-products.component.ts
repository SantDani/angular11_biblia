import { Product } from './../models/product.models';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  @Input()
  inputProducts: Product[];
  @Input()
  inputMostrarComprados: boolean;

  @Output()
    outEventBuyProduct: EventEmitter<Product>;
  constructor() {
    this.inputProducts = [];
    this.outEventBuyProduct = new EventEmitter();
    this.inputMostrarComprados = true;
  }

  ngOnInit(): void {
  }

  buyProduct(product : Product){
    this.outEventBuyProduct.emit(product);
  }
}
