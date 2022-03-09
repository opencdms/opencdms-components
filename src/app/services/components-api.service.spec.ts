import { TestBed } from '@angular/core/testing';

import { ComponentsApiService } from './components-api.service';

describe('ComponentsApiService', () => {
  let service: ComponentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
