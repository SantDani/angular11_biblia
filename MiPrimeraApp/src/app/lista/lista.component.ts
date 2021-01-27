import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //@Input() a: number;
  @Input() inputTasks: string[];
  constructor() {
    this.inputTasks = [];
  }

  ngOnInit(): void {


  }

}
