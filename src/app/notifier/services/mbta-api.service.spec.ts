import { TestBed } from '@angular/core/testing';

import { MbtaApiService } from './mbta-api.service';

describe('MbtaApiService', () => {
  let service: MbtaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbtaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
