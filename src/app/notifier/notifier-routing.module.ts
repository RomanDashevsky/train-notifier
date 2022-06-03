import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotifierComponent } from './components/notifier.component'

const routes: Routes = [
  {
    path: '',
    component: NotifierComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifierRoutingModule { }
