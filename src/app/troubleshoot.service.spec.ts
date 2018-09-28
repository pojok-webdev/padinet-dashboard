import { TestBed, inject } from '@angular/core/testing';

import { TroubleshootService } from './troubleshoot.service';

describe('TroubleshootService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TroubleshootService]
    });
  });

  it('should be created', inject([TroubleshootService], (service: TroubleshootService) => {
    expect(service).toBeTruthy();
  }));
});
