import { TestBed } from '@angular/core/testing';

import { HlService } from './hl.service';

describe('HlService', () => {
  let service: HlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
