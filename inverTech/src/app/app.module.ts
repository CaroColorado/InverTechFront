import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './profiling/message/message.component';
import { ProfilingComponent } from './profiling/profiling.component';

@NgModule({
  declarations: [
    //Aqui se deben declarar TODOs lo componentes que se van a usar, a menos de que sean hijos de otros componentes y no se deban mostrar aca
    AppComponent,
    ProfilingComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
