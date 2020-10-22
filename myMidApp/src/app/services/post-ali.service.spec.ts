import { TestBed } from '@angular/core/testing';

import { PostAliService } from './post-ali.service';

describe('PostAliService', () => {
  let service: PostAliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
