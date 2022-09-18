import { TestBed } from '@angular/core/testing';

import { CompCartService } from './comp-cart.service';

describe('CompCartService', () => {
  let service: CompCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
