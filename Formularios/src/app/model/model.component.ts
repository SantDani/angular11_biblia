import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  formulario: FormGroup;
  expresionRegularValidarEmail: string;

  /**
   *
   * valid -- invalid
   * Prisitne -- dirty
   * untouched -- touched
   */
  constructor() {

    this.expresionRegularValidarEmail = '^[0-9a-zA-Z]+([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@[0-9a-zA-Z]+([-.][0-9a-zA-Z]+)*([0-9a-zA-Z]*[.])[a-zA-Z]{2,6}$';
    this.formulario = new FormGroup(
      {
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('',[
          Validators.maxLength(10)
        ]
        ),
        edad: new FormControl(''),
        dni: new FormControl(''),
        password: new FormControl(''),
        repite_password: new FormControl(''),
        email: new FormControl('', [
          // .pattern enviar una expresion regular para validad
          //https://regexlib.com/?AspxAutoDetectCookieSupport=1
          Validators.pattern(this.expresionRegularValidarEmail),

        ]),
      }
    );
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formulario.value);
  }
}
