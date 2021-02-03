import { WriterDetailComponent } from './writer-detail/writer-detail.component';
import { WriterComponent } from './writer/writer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/escritores'},
  { path: 'escritores', component: WriterComponent},
  { path: 'escritores/:escritorId', component: WriterDetailComponent },
  { path: ':**', redirectTo: '/escritores' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
