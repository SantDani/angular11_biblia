import { ExperienciaComponent } from './componentes/empleados/experiencia/experiencia.component';
import { CurriculumComponent } from './componentes/empleados/curriculum/curriculum.component';
import { ProyectosComponent } from './componentes/empleados/proyectos/proyectos.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { AboutComponent } from './componentes/about/about.component';
import { InfoComponent } from './componentes/info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomGuard } from './random.guard';// se tiene que importar el Guard

/**
 * Minimo 2 propiedades
 * path: url que se ha de escribir en el navegador para acceder al cponente
 * component: que se va a activar
 */
const routes: Routes = [
  //Ruta ROOT
  /**
   * pathMatch: fuerza que tiene que ser exactamente al path,
   * esta propiedad suele ser casi exlusiva para indicar la ruta raiz
   */
  { path: '', pathMatch: 'full', redirectTo: 'informacion'},
  { path: 'informacion', component: InfoComponent , canActivate: [RandomGuard]},
  //redicecion: Refesca y cambia url (head)
  { path: 'about', redirectTo: 'sobre'},
  { path: 'sobre', component: AboutComponent  },
  { path: 'contacto', component: ContactComponent  },
  /**
   * path DINAMICO viene precedida de dos puntos,
   * los dos puntos indica que a continuacion la URL es dinamica
   */
  {path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent,
    children: [
      {path: 'proyectos', component: ProyectosComponent},
      {path: 'curriculum', component: CurriculumComponent},
      {path: 'experiencia', component: ExperienciaComponent}
    ]},
  // Ruta default
  { path: '**', redirectTo: 'contacto'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/**
 * Modulo para la generacion de rutas.
 * Esto permite gestionar las rutas de manera independiente
 * de la funcionalidad de la aplicación.
 */
export class AppRoutingModule { }
