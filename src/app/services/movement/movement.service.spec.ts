import { TestBed } from '@angular/core/testing';

import { BalanceService } from './movement.service';

describe('BalanceService', () => {
  let service: BalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
