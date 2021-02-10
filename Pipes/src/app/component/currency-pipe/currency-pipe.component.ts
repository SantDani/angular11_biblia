import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.css']
})
export class CurrencyPipeComponent implements OnInit {

  precio: number;
  constructor() {
    this.precio = 198.878888;
  }

  ngOnInit(): void {
  }

}
