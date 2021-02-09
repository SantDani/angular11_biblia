import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-upper-title-pipe',
  templateUrl: './lower-upper-title-pipe.component.html',
  styleUrls: ['./lower-upper-title-pipe.component.css']
})
export class LowerUpperTitlePipeComponent implements OnInit {

  // Lower, Upper, Title
  texto: string;
  constructor() {
    this.texto = ' k es lo k tu ase';
  }

  ngOnInit(): void {
  }

}
