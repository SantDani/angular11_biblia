import { Component, OnInit , Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit {

  @Input()
  inputTexto!: string;

  constructor() {
    console.log("*** Estoy en el construcor. 1r que se lanza");
    console.log("\tLo utilizo para inicializar las pripiedades");
    console.log("\tvalor input = " + this.inputTexto);

   }

   ngOnChanges( changesSimple: any) : void{
    console.log("***Estoy en ongOnChanges");
    //console.log("***Tengo la capacidad de ejecutarme cada vez que cambian los Inputs que entran en este componente");


    console.log("\tvalor input =  " + this.inputTexto);
    console.log(changesSimple);
    // console.log(`\tValor anterior : ${changesSimple['previousValue']}.
    //              Valor actual: ${changesSimple['currentValue']}`);

    console.log(`\tValor anterior : ${changesSimple['inputTexto'].previousValue}.
    Valor actual: ${changesSimple['inputTexto'].currentValue}`);


   }
  ngOnInit(): void {
    /**OnInit es una interfaz.
     * Esta determina las funcionnes qu tiene que implementar  la clase.
     */

     console.log("***Estoy en ngOnInit");
     console.log("\tLo uso para lanzar las acciones que arrancan en el componente");

     console.log("\tvalor input =  " + this.inputTexto);
  }

  ngAfterViewInit(){
    console.log("***Estoy en ngAfterViewInit");
    console.log("\tMe ejecuto cuando el HTML esta visible");
    console.log("\tLo uso para lanzar acciones iniciales dentro de la plantilla");

  }

  ngOnDestroy(){
    console.log("***Estoy en ngOnDestroy");
    console.log("***Me destruyo cuando ya no estoy en pantalla");

  }
}
