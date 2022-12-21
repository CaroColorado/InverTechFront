import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { ProfilingComponent } from './profiling.component';

const routes: Routes = [
  {path: '', component: ProfilingComponent, children: [
    {path: 'message', component: MessageComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProfilingRoutingModule { }
