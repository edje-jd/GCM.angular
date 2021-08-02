import { TestBed } from '@angular/core/testing';

import { VisitePMService } from './visite-pm.service';

describe('VisitePMService', () => {
  let service: VisitePMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitePMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
