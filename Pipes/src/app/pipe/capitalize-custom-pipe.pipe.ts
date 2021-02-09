import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeCustomPipe'
})
export class CapitalizeCustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    /* if (typeof value === 'string'){
      const palabras = value.split(' ');
      const arrayTemp = [];

      for (const palabra of palabras) {
        arrayTemp.push(palabra[0].toUpperCase() +  palabra.slice(1).toLocaleLowerCase());
      }

      return arrayTemp.join(' ');
    } */

    if (typeof value === 'string'){
      return value
        .split(' ')
        .map(palabra => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase() )
        .join(' ');
    }
    return 'no es un string';
  }

}
