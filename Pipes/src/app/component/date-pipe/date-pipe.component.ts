import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css']
})
export class DatePipeComponent implements OnInit {

  // date pipe
  fechaActual: Date;
  constructor() {
    this.fechaActual = new Date();
   }

  ngOnInit(): void {
    // EJEMPLO de posible cronometro
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
  }

}
