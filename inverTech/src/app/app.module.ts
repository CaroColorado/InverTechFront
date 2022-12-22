import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderuserinfoComponent } from './headeruserinfo/headeruserinfo.component';
import { MainuserinfoComponent } from './mainuserinfo/mainuserinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderuserinfoComponent,
    MainuserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
