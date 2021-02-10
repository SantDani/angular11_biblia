import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  /**
   * Toda la casi toda la funcionalidad se define en el HTML
   */

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValues){

    console.log(formValues);
  }

}
