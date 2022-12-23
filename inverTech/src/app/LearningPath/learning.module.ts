import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningheaderComponent } from './learningheader/learningheader.component';
import { LearningsectionComponent } from './learningsection/learningsection.component';



@NgModule({
  declarations: [
    LearningheaderComponent,
    LearningsectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LearningModule { }
