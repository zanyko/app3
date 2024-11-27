import { TestBed } from '@angular/core/testing';

import { CruduserService } from './cruduser.service';

describe('CruduserService', () => {
  let service: CruduserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CruduserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
