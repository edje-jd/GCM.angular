import { TestBed } from '@angular/core/testing';

import { PhoraireService } from './phoraire.service';

describe('PhoraireService', () => {
  let service: PhoraireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoraireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
