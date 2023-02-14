import { TestBed } from '@angular/core/testing';

import { AutomobiServiceService } from './automobi-service.service';

describe('AutomobiServiceService', () => {
  let service: AutomobiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomobiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
