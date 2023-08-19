import { TestBed } from '@angular/core/testing';

import { ChoferservicsService } from './choferservics.service';

describe('ChoferservicsService', () => {
  let service: ChoferservicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChoferservicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
