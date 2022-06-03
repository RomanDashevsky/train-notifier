import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierComponent } from './components/notifier.component';
import { NotifierRoutingModule } from './notifier-routing.module'



@NgModule({
  declarations: [
    NotifierComponent
  ],
  imports: [
    CommonModule,
    NotifierRoutingModule
  ]
})
export class NotifierModule { }
