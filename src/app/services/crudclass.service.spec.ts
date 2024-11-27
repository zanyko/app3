import { TestBed } from '@angular/core/testing';

import { CrudclassService } from './crudclass.service';

describe('CrudclassService', () => {
  let service: CrudclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
