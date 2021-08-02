import { TestBed } from '@angular/core/testing';

import { AnnalyseVService } from './annalyse-v.service';

describe('AnnalyseVService', () => {
  let service: AnnalyseVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnalyseVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
