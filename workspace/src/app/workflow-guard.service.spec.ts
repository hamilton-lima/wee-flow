import { TestBed } from '@angular/core/testing';

import { CheckoutWorkflowGuard } from './checkout-workflow.guard';

describe('WorkflowGuardService', () => {
  let service: CheckoutWorkflowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutWorkflowGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
