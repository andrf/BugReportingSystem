import { TestBed } from '@angular/core/testing';

import { BugReportSystemService } from './bug-report-system.service';

describe('BugReportSystemService', () => {
  let service: BugReportSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugReportSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
