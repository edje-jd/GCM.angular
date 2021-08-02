import { TestBed } from '@angular/core/testing';

import { OrdonanceMVService } from './ordonance-mv.service';

describe('OrdonanceMVService', () => {
  let service: OrdonanceMVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdonanceMVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
