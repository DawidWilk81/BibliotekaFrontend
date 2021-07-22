import { TestBed } from '@angular/core/testing';

import { KsiazkiService } from './ksiazki.service';

describe('KsiazkiService', () => {
  let service: KsiazkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KsiazkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
