import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(SampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method() check', () => {
    spyOn(service, 'method').and.callThrough();
    expect(service.method()).toBe(1);
  });
});
