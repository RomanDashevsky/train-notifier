import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, interval, map, mergeMap, of, tap, timer } from 'rxjs';
import { MbtaApiService } from '../mbta-api/mbta-api.service';
import { DepartureBoardItem } from '../../types/departure-board';
import { getMinutesDiff } from '../../../shared/utils/time-diff';

const scheduleTrackerPeriod = 30000; // 5 minutes

// TODO: move store to ngrx approach when ngrx will be ready for Angular 14

@Injectable()
export class StoreService {
  // TODO: move stopID to client settings
  // Boston Landing - Commuter Rail
  stopId = 'WML-0035';

  data$ = new BehaviorSubject<DepartureBoardItem[]>([]);

  currentTime$ = new BehaviorSubject(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));

  timeTracker$ = interval(1000).pipe(tap(() => this.currentTime$.next(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }))));

  scheduleTracker$ = timer(0, scheduleTrackerPeriod).pipe(
    mergeMap(() => {
      return this.apiService.getSchedule(this.stopId).pipe(
        catchError((error) => {
          // TODO: implement api error handler
          console.error(error);

          return of({ data: [] });
        }),
        map((results) => {
          const currentTime = this.currentTime$.value;
          return results.data
            .map((item) => {
              return {
                name: item.relationships.trip.data.id,
                arrivalTime: item.attributes.arrival_time,
                departureTime: item.attributes.departure_time,
              };
            })
            .filter((item) => getMinutesDiff(item.arrivalTime, currentTime) >= 0);
        })
      );
    }),
    tap((results) => {
      console.log(results)
      this.data$.next(results);
    })
  );

  constructor(private apiService: MbtaApiService) {}
}
