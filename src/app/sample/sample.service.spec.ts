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
    jest.spyOn(service, 'method');
    expect(service.method()).toBe(1);
  });
});
