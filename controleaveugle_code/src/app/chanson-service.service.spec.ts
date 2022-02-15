import { TestBed } from '@angular/core/testing';

import { ChansonServiceService } from './chanson-service.service';

describe('ChansonServiceService', () => {
  let service: ChansonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChansonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
