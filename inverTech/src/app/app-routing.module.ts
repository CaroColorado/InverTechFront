import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //todo enrutamiento debe importar RouterModule y Routes
import { ProfilingComponent } from './profiling/profiling.component';

const routes: Routes = [
  //aqui se indican las rutas
  { path: '', redirectTo: 'profiling', pathMatch: 'full'},
  { path: 'profiling', component: ProfilingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
