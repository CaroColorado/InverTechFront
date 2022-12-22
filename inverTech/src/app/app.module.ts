import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningPathComponent } from './LearningPath/learning-path.component';
import { LearningheaderComponent } from './LearningPath/learningheader/learningheader.component';
import { LearningsectionComponent } from './LearningPath/learningsection/learningsection.component';

@NgModule({
  declarations: [
    AppComponent,
    LearningPathComponent,
    LearningheaderComponent,
    LearningsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
