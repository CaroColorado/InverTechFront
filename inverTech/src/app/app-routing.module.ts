import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MultipleChioceComponent } from './multiple-chioce/multiple-chioce.component';

const routes: Routes = [
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'multiple',
    component: MultipleChioceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
