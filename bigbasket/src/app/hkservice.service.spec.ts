import { TestBed } from '@angular/core/testing';

import { HKserviceService } from './hkservice.service';

describe('HKserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HKserviceService = TestBed.get(HKserviceService);
    expect(service).toBeTruthy();
  });
});
