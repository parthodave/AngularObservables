import { TestBed } from '@angular/core/testing';

import { MessageSharingService } from './message-sharing.service';

describe('MessageSharingService', () => {
  let service: MessageSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
