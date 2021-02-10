import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  templateUrl: './decimal-pipe.component.html',
  styleUrls: ['./decimal-pipe.component.css']
})
export class DecimalPipeComponent implements OnInit {

  numero: number;
  constructor() {
    this.numero = 3.98798654189416;
  }

  ngOnInit(): void {
  }

}
