import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartureBoardComponent } from './components/departure-board/departure-board.component';

const routes: Routes = [
  {
    path: '',
    component: DepartureBoardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifierRoutingModule {}
