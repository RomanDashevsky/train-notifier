import { fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'

import { MbtaApiService } from './mbta-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { environment } from '../../../../environments/environment'
import { scheduleResponseMock } from '../../../../test/mocks/schedule-response'

describe('MbtaApiService', () => {
  let service: MbtaApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        MbtaApiService
      ]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MbtaApiService);
  });

  afterEach(waitForAsync(() => httpMock.verify()));

  it('should get shedule ', fakeAsync(() => {
    const stopId = 'testId'
    const apiUrl = `${environment.mbtaApiUrl}/schedules?sort=arrival_time&filter%5Bstop%5D=${stopId}`;

    service.getSchedule(stopId).subscribe((result) => {
      expect(result).toEqual(scheduleResponseMock);
    })


    const  request = httpMock.expectOne(apiUrl);
    expect(request.request.method).toBe("GET");
    request.flush(scheduleResponseMock);
  }));
});
