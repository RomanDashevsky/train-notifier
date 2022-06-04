import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartureBoardComponent } from './components/departure-board/departure-board.component';
import { NotifierRoutingModule } from './notifier-routing.module';
import { MbtaApiService } from './services/mbta-api/mbta-api.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { StoreService } from './services/store/store.service';

@NgModule({
  declarations: [DepartureBoardComponent],
  imports: [HttpClientModule, CommonModule, NotifierRoutingModule, SharedModule],
  providers: [MbtaApiService, StoreService],
})
export class NotifierModule {}
