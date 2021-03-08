import { TestBed } from '@angular/core/testing';

import { CustomValidatorsServiceService } from './custom-validators-service.service';

describe('CustomValidatorsServiceService', () => {
  let service: CustomValidatorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomValidatorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
