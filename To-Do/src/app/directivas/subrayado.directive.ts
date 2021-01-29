import { Directive } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  constructor() {
    console.log('Directiva subrayado')
   }

}
