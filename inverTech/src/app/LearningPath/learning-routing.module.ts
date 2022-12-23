import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LearningheaderComponent } from './learningheader/learningheader.component';
import { LearningsectionComponent } from './learningsection/learningsection.component';


const routes: Routes = [
  {path: 'learningheader', component: LearningheaderComponent},
  {path: 'learningsection', component:LearningsectionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LearningRoutingModule { }
