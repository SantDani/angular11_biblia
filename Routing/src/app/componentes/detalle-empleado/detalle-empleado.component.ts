import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  empleadoId : number;
  /**
   * @activatedRoute
   *
   * Recuperamos el empleado-id,
   * es necesario inyectar activatedRoute
   */

  constructor(private activateRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    /**
     * @params
     *
     * recibe la parte dinamica de la URL
     */
    this.activateRoute.params.subscribe(concreteSubcribers => {
      console.log(concreteSubcribers);
      console.log(concreteSubcribers.empleadoId);
      this.empleadoId = concreteSubcribers.empleadoId;

    });
  }

}
