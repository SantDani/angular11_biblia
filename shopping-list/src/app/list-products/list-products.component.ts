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
  inputProductsBuy : Product[];

  @Output()
    outEventBuyProduct: EventEmitter<Product>;

  @Output()
    outEvenetDeleteProduct : EventEmitter<Product>;
  constructor() {
    this.inputProducts = [];
    this.outEventBuyProduct = new EventEmitter();
    this.inputProductsBuy = [];
    this.outEvenetDeleteProduct = new EventEmitter();
  }

  ngOnInit(): void {
  }

  buyProduct(product : Product){
    // this.outEventBuyProduct.emit(product);
    product.buyed = true;
    this.del(this.inputProducts, product);
    this.outEventBuyProduct.emit(product);
  }

  deleteProduct(product : Product){
    product.buyed = false;
    this.del(this.inputProductsBuy, product);
    this.outEvenetDeleteProduct.emit(product);

  }

  del(arrayProduct: Product[], product : Product){

    const index = arrayProduct.indexOf(product);
    console.log("index product  " + index);
    console.log(" name product " + product.name);
    if(index > -1){
      console.log("elimino proucto " + product.name);
      //product.buyed = false;
      arrayProduct.splice(index, 1);

    }
  }
}
