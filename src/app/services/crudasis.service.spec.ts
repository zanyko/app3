import { TestBed } from '@angular/core/testing';

import { CrudasisService } from './crudasis.service';

describe('CrudasisService', () => {
  let service: CrudasisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudasisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
