import { Directive, ElementRef, Renderer2 , HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
  /* de esta manera se puede utilizar como una clase.
  pero de esta manerap puede llevar a confusion */
  //selector: '.appSubrayado'
})
export class SubrayadoDirective {

  /**
   *
   * @ElementRef
   *   nos devuelve el lemento exacto sobre el cual estamos aplicando
   *  una directiva.
   * De esta manera es como si estuvieramos trabajando con JS.
   * Se recupera el objeto del DOM, con getElemetnById y
   * se modifica como se quiera.
   * Solo para plataformas de navegador.
   *
   * @Renderer2
   *
   * Nos permite relizar las mismas modificaciones que @ElementRef,
   * pero de esta manera se realiza de en cualqueir plataforma, ya sea
   * navegador, movil, ...
   *
   *
   * *****ACCESO VARIABLES
   *
   * para tener acceso a las variables del constructor, se les ha de "declarar" como privadas.
   * De esta manera se pueden acceder a ellas en toda la clase.
   *
  */
  constructor(private elem: ElementRef, private  renderer:Renderer2) {
    console.log('Estoy utilizando la directiva');
    //console.log(elem.nativeElement);
    //elem.nativeElement.style.textDecoration = 'underline';

    renderer.setStyle(elem.nativeElement, 'text-decoration', 'underline');
    renderer.setStyle(elem.nativeElement, 'color', 'red');

    this.config = {
      sizeHover: '30px',
      sizeNoHover: '14px'
    }

    // this.configV2 = {
    //   //border: 2px solid black;
    //   borderHover: '4px solid black',
    //   borderNoHover: '2px solid black'
    // }
  }

  /**
   * @HostListener
   *
   * 1 parametro : que evento se quiere capturar
   *
   * Es un decorador que se puede apliar sobre clases, propiedades  i metodos.
  */

  @HostListener('mouseover')
  onHover(){
    this.renderer.setStyle(this.elem.nativeElement, 'font-size', this.config.sizeHover);
    //this.renderer.setStyle(this.elem.nativeElement, 'border', this.configV2.borderHover);

    this.isHover = 'hover';


  }

  @HostListener('mouseout')
  onMouseOut(){
    this.renderer.setStyle(this.elem.nativeElement, 'font-size', this.config.sizeNoHover);
    //this.renderer.setStyle(this.elem.nativeElement, 'border', this.configV2.borderNoHover);
    this.isHover = 'noHover';

  }

  /**
   * @HosBinding
   *
   * 1 atribuo del elemento que quiero modificar
   *
   * Modificar los atributos, ya sea class, id, ....
   *
   */

   @HostBinding('class') isHover:any ;

   /**
    * @Input
    */

    //@Input() config: any;
    // @Input('appSubrayado') configV2: any;
     @Input('appSubrayado') config: any;
}
