import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MainuserinfoComponent } from '../mainuserinfo/mainuserinfo.component';
import { HeaderuserinfoComponent } from '../headeruserinfo/headeruserinfo.component';

const routes: Routes = [
  //aqui se indican las rutas
  { path: 'mainuserinfo', component: MainuserinfoComponent},
  { path: 'headeruserinfo', component: HeaderuserinfoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserRoutingModule { }
