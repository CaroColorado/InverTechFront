import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningPathComponent } from './LearningPath/learning-path.component';

const routes: Routes = [
  {path:'', redirectTo: 'learning', pathMatch:'full'},
  {path: 'learning', component: LearningPathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
