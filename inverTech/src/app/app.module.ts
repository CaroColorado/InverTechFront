import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessageComponent } from './profiling/message/message.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { LearningPathComponent } from './LearningPath/learning-path.component';
import { LearningheaderComponent } from './LearningPath/learningheader/learningheader.component';
import { LearningsectionComponent } from './LearningPath/learningsection/learningsection.component';

@NgModule({
  declarations: [
    //Aqui se deben declarar TODOs lo componentes que se van a usar, a menos de que sean hijos de otros componentes y no se deban mostrar aca
    AppComponent,
    ProfilingComponent,
    MessageComponent,
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
