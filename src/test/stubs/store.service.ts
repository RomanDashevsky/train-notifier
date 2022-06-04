import { BehaviorSubject, of } from 'rxjs';
import { DepartureBoardItem } from '../../app/notifier/types/departure-board'


export class StoreServiceStub {
  stopId = 'WML-0035';
  data$ = new BehaviorSubject<DepartureBoardItem[]>([]);
  currentTime$ = new BehaviorSubject(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
  timeTracker$ = of({});
  scheduleTracker$ = of({});
}
