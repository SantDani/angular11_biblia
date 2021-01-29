import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  empleadoId: number;
  /**
   * Para acceder al Id del empleado,
   * se ha de hacer algo similar a  detalle de empleado.
   * La difernecia, es que prviamente he de pasar poor el padre para poder subscribirme al observer
   */
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // se pasa primero por el padre para poder suscribirme
    this.activateRoute.parent.params.subscribe(subsriptores=>{
      console.log(  'hijo proyectos. ID = '+subsriptores.empleadoId);
      this.empleadoId = subsriptores.empleadoId;
    });
  }

}
