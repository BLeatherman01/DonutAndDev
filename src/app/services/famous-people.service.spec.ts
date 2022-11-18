import { TestBed } from '@angular/core/testing';

import { FamousPeopleService } from './famous-people.service';

describe('FamousPeopleService', () => {
  let service: FamousPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamousPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
