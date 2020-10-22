import { TestBed } from '@angular/core/testing';

import { MainAliService } from './main-ali.service';

describe('MainAliService', () => {
  let service: MainAliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainAliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
