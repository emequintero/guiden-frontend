import { TestBed } from '@angular/core/testing';

import { AlgoserviceService } from './algo.service';

describe('AlgoserviceService', () => {
  let service: AlgoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
