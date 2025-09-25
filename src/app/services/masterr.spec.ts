import { TestBed } from '@angular/core/testing';

import { Masterr } from './masterr';

describe('Masterr', () => {
  let service: Masterr;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Masterr);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
