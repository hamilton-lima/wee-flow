import { TestBed } from '@angular/core/testing';

import { LoremIpsumService } from './lorem-ipsum.service';

describe('LoremIpsumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoremIpsumService = TestBed.get(LoremIpsumService);
    expect(service).toBeTruthy();
  });
});
