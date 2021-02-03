import { TestBed } from '@angular/core/testing';

import { SEscritoresService } from './s-escritores.service';

describe('SEscritoresService', () => {
  let service: SEscritoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEscritoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
