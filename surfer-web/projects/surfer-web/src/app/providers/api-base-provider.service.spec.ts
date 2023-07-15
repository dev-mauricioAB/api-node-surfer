import { TestBed } from '@angular/core/testing';

import { ApiBaseServiceProvider } from './api-base-provider.service';

describe('ApiBaseService', () => {
  let service: typeof ApiBaseServiceProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = ApiBaseServiceProvider;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
