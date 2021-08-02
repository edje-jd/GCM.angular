import { TestBed } from '@angular/core/testing';

import { AnnalyseServiceService } from './annalyse-service.service';

describe('AnnalyseServiceService', () => {
  let service: AnnalyseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnalyseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
