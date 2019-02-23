import { TestBed } from '@angular/core/testing';

import { WebCompLibService } from './web-comp-lib.service';

describe('WebCompLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebCompLibService = TestBed.get(WebCompLibService);
    expect(service).toBeTruthy();
  });
});
