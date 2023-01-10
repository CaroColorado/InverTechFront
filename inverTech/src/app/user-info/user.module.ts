import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainuserinfoComponent } from '../mainuserinfo/mainuserinfo.component';
import { HeaderuserinfoComponent } from '../headeruserinfo/headeruserinfo.component';



@NgModule({
  declarations: [
    MainuserinfoComponent,
    HeaderuserinfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
