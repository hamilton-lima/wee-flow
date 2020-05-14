import { TestBed } from "@angular/core/testing";

import { WeeFlowService } from "./wee-flow.service";

describe("WeeFlowService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [WeeFlowService] })
  );

  it("should be created", () => {
    const service: WeeFlowService = TestBed.get(WeeFlowService);
    expect(service).toBeTruthy();
  });
});
