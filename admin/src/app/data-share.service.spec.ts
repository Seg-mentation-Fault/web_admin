import { TestBed } from '@angular/core/testing';

import { DataShareService } from './services/data-share.service';

describe('DataShareService', () => {
  let service: DataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
