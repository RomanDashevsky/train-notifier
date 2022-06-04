import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Schedule } from '../../types/schedule-response';
import { StoreService } from '../../services/store/store.service';
import { Subscription } from 'rxjs';
import { getMinutesDiff } from '../../../shared/utils/time-diff';

@Component({
  selector: 'app-departure-board',
  templateUrl: './departure-board.component.html',
  styleUrls: ['./departure-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartureBoardComponent implements OnInit, OnDestroy {
  trackerSubscription: Subscription = new Subscription();
  timerTrackerSubscription: Subscription = new Subscription();

  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    this.trackerSubscription = this.storeService.scheduleTracker$.subscribe();
    this.timerTrackerSubscription = this.storeService.timeTracker$.subscribe();
  }

  ngOnDestroy(): void {
    this.trackerSubscription.unsubscribe();
    this.timerTrackerSubscription.unsubscribe();
  }

  // less than ten minutes
  isSoonArrived(arrival: string, current: string): boolean {
    return getMinutesDiff(arrival, current) <= 10;
  }

  getStatus(arrival: string, current: string): string {
    if(this.isSoonArrived(arrival, current)) {
      return "Arriving soon"
    }


    return "In transit"
  }

  tripId(index: number, item: Schedule) {
    return item.id;
  }
}
