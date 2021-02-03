import { TestBed } from '@angular/core/testing';

import { CanLeaveAuthGuard } from './can-leave-auth.guard';

describe('CanLeaveAuthGuard', () => {
  let guard: CanLeaveAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLeaveAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
