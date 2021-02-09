import { Pipe, PipeTransform } from '@angular/core';

// Decorador pipe, con su nombre lo utilizamos en el punto de la app que desemos
@Pipe({
  name: 'reverseCustomPipe'
})
export class ReverseCustomPipePipe implements PipeTransform {
  // interfaz que se implementa por PipeTransform
  transform(value: string, ...args: unknown[]): unknown {
    // retrun es lo que se muestra en el HTMl
    const arrayValue = value.split(''); // separador '', este recorta cada letra
    const arrReverso = arrayValue.reverse();


    return arrReverso.join(''); // metodo Join(), es el contrario al split
    }

}
