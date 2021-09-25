import { TestBed } from '@angular/core/testing';

import { ApicleinteService } from './apicleinte.service';

describe('ApicleinteService', () => {
  let service: ApicleinteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicleinteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
