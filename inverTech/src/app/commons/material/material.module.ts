import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import {} from '@angular/material'
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }
