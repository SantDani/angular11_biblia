import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegisterComponent } from './component/form-register/form-register.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/form-register'},
  {path: 'form-register', component: FormRegisterComponent},
  {path: 'list' , component: ListComponent},
  {path: '**', redirectTo: '/form-register'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
