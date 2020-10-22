import { TestBed } from '@angular/core/testing';

import { AlbAliService } from './alb-ali.service';

describe('AlbAliService', () => {
  let service: AlbAliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbAliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
