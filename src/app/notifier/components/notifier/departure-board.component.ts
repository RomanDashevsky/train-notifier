import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MbtaApiService } from '../../services/mbta-api.service';
import { map } from 'rxjs';
import { Schedule } from '../../types/schedule-response';

@Component({
  selector: 'app-notifier',
  templateUrl: './departure-board.component.html',
  styleUrls: ['./departure-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartureBoardComponent {
  // TODO: move stopID to client settings
  // Boston Landing - Commuter Rail
  $schedule = this.apiService.getSchedule('WML-0035').pipe(map((results) => results.data));

  constructor(private apiService: MbtaApiService) {}

  tripId(index: number, item: Schedule) {
    return item.id;
  }
}
