import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartureBoardComponent } from './components/notifier/departure-board.component';
import { NotifierRoutingModule } from './notifier-routing.module';
import { MbtaApiService } from './services/mbta-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { TripItemComponent } from './components/trip-item/trip-item.component';

@NgModule({
  declarations: [DepartureBoardComponent, TripItemComponent],
  imports: [HttpClientModule, CommonModule, NotifierRoutingModule, SharedModule],
  providers: [MbtaApiService],
})
export class NotifierModule {}
