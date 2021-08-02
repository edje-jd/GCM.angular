import { TestBed } from '@angular/core/testing';

import { MedecinPHService } from './medecin-ph.service';

describe('MedecinPHService', () => {
  let service: MedecinPHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedecinPHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
