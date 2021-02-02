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


  @Output()
    outEventSelectProduct: EventEmitter<number>;


  constructor() {
    this.inputProducts = [];
    this.outEventSelectProduct = new EventEmitter();


  }

  ngOnInit(): void {
  }

  selectedProduct(indexProduct : number){
    this.outEventSelectProduct.emit(indexProduct);

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
