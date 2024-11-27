import { TestBed } from '@angular/core/testing';

import { CrudjustService } from './crudjust.service';

describe('CrudjustService', () => {
  let service: CrudjustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudjustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
