import { TestBed } from '@angular/core/testing';

import { SearchLibService } from './search-lib.service';

describe('SearchLibService', () => {
  let service: SearchLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
