import { TestBed } from '@angular/core/testing';

import { LinkHomePageService } from './link-home-page.service';

describe('LinkHomePageService', () => {
  let service: LinkHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
