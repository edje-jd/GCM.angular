import { TestBed } from '@angular/core/testing';

import { PatientDeseaseService } from './patient-desease.service';

describe('PatientDeseaseService', () => {
  let service: PatientDeseaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientDeseaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
