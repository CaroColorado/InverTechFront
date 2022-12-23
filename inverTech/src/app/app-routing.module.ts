import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; //todo enrutamiento debe importar RouterModule y Routes
import { ProfilingComponent } from './profiling/profiling.component';
import { LearningPathComponent } from './LearningPath/learning-path.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  //aqui se indican las rutas
  { path: 'profiling', component: ProfilingComponent},
  { path: 'learning', component: LearningPathComponent },
  { path: 'userinfo', component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
