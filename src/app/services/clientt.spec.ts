import { TestBed } from '@angular/core/testing';

import { Clientt } from './clientt';

describe('Clientt', () => {
  let service: Clientt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Clientt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
