import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { ScheduleResponse } from '../types/schedule-response'
import { Observable } from 'rxjs'

@Injectable()
export class MbtaApiService {
  constructor (private http: HttpClient) {}

  getSchedule(stopId: string): Observable<ScheduleResponse> {
    return this.http.get<ScheduleResponse>(`${environment.mbtaApiUrl}/schedules?page%5Blimit%5D=3&sort=departure_time&filter%5Bstop%5D=${stopId}`)
  }
}
