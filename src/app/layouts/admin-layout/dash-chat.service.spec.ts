import { TestBed } from '@angular/core/testing';

import { DashChatService } from './dash-chat.service';

describe('DashChatService', () => {
  let service: DashChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
