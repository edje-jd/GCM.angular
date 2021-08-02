import { TestBed } from '@angular/core/testing';

import { HospitalisationVService } from './hospitalisation-v.service';

describe('HospitalisationVService', () => {
  let service: HospitalisationVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalisationVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
