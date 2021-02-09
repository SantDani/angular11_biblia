import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArrCustomPipe'
})
export class NumToArrCustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if(typeof value === 'number'){
      return [...Array(value).keys()];
    }
    return null;
  }

}
