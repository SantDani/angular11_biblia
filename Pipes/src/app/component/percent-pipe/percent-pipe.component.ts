import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  templateUrl: './percent-pipe.component.html',
  styleUrls: ['./percent-pipe.component.css']
})
export class PercentPipeComponent implements OnInit {

  numberPercent: number;
  constructor() {
    this.numberPercent = Math.random();
   }

  ngOnInit(): void {
  }

}
