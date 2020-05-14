import { TestBed } from "@angular/core/testing";
import { INavigator, WeeFlowServiceImpl } from "./wee-flow.service.impl";

class CustomRouter implements INavigator {
  lastRoute: string;
  public navigate(route) {
    this.lastRoute = route;
  }
}

describe("WeeFlowService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    const service = new WeeFlowServiceImpl(new CustomRouter());
    expect(service).toBeTruthy();
    console.log("test me here");
  });
});
