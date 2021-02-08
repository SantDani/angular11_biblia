import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//recupera cada tecla que pulsamos
import { debounceTime } from 'rxjs/operators';

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
          Validators.minLength(4)
        ]),
        apellidos: new FormControl('', [
          Validators.maxLength(7)
        ]
        ),
        edad: new FormControl('', [
          this.edadValidador
        ]),
        dni: new FormControl('',
        [
          this.dniValidador
        ]),
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

    // const emailControl = this.formulario.controls.email;
    const emailControl = this.formulario.controls['email']; // otra opcion
    /**
     * Cuando detecta que se cambia el campo email, salta la funcion
     */
    // emailControl.valueChanges.subscribe(valorCampo => {
    //   console.log(valorCampo);
    //   //aqui podemos implementar cualquier funcionalidad que depneda de los cambios
    // });

    /**
     *
     * @function pipe
     *
     * @method debounceTime
     * Con esto salta la funcion cada vez que el usuario haya acabado de
     * introducir un valor, ya sea, cambiando de foco o apretando enter.
     *
     */
    emailControl.valueChanges.pipe(debounceTime(500)).subscribe(valorCampo => {
      console.log(valorCampo);
      //aqui podemos implementar cualquier funcionalidad que depneda de los cambios
    });
  }

  edadValidador(formControl){
    const value = formControl.value;
    console.log(value);

    const max = 65;
    const min = 18;

    if (value >= min && value <= max){
      return null;
    }else{
      return {edadValidador: { max, min}};
    }

  }

  dniValidador(formControl){
    const valDNI = formControl.value;
    const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(valDNI)){
      const numero = valDNI.substr(0, valDNI.length - 1);
      const letra = valDNI.charAt(valDNI.length - 1); ;
      console.log(numero);
      console.log(letra);

      const resto = numero % 23;
      const letraSeleccionada = letrasValidas.charAt(resto);
      if(letra.toUpperCase() === letraSeleccionada){
        // coincide la letra
        //el dni es correcto
        console.log('es valido');
        return null;
      }else{

        return{ dniValidator: 'La letra no coincide con el número'};
      }

    }else{
      return {dniValidator : 'el dni no tiene el formato correcto.'};
    }


  }
  onSubmit(){
    console.log(this.formulario.value);
  }
}
