import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  urlTest: string;
  constructor() {
    this.urlTest = 'https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-79729911/fee_786_587_png/Tablet---Woxter-X70--16-GB--Rosa--WiFi--7%22--1-GB-RAM--Mediatek-A35--Android';
   }

  ngOnInit(): void {
  }

}
