import { TestBed } from '@angular/core/testing';

import { OpenCDMSApiService } from './opencdms-api.service';

describe('OpenCDMSApiService', () => {
  let service: OpenCDMSApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCDMSApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
