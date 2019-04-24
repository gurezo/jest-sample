import expect from 'expect';
import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  test(
    'should be created',
    inject([MessageService], (service: MessageService) => {
      expect(service).toBeTruthy();
    })
  );
});
