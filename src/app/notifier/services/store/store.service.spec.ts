import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import { MbtaApiService } from '../mbta-api/mbta-api.service'
import { MbtaApiServiceStub } from '../../../../test/stubs/mbta-api.service'
import { take } from 'rxjs'

describe('StoreService', () => {
  let service: StoreService;
  let apiService: MbtaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreService, {provide: MbtaApiService, useClass: MbtaApiServiceStub}]
    });
    service = TestBed.inject(StoreService);
    apiService = TestBed.inject(MbtaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
