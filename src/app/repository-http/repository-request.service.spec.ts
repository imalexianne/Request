import { TestBed } from '@angular/core/testing';

import { RepositoryRequestService } from './repository-request.service';

describe('RepositoryRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryRequestService = TestBed.get(RepositoryRequestService);
    expect(service).toBeTruthy();
  });
});
