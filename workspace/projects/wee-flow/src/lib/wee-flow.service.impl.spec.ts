import { INavigator, WeeFlowServiceImpl } from "./wee-flow.service.impl";
import { mockFlowconfig } from "./mock";

class CustomRouter implements INavigator {
  lastRoute: string;
  public navigate(route) {
    this.lastRoute = route;
  }
}

describe("WeeFlowServiceImpl", () => {

  it("should be created", () => {
    const service = new WeeFlowServiceImpl(new CustomRouter());
    expect(service).toBeTruthy();
  });

  it("should navigate to the starting page", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImpl(router);
    service.setConfig(mockFlowconfig);
    service.start();

    expect(router.lastRoute).toBe("start");
  });

  it("should use expression to navigate to the next page", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImpl(router);
    service.setConfig(mockFlowconfig);
    service.start();
    service.next();
    expect(router.lastRoute).toBe("choose-product");

    service.set({price: 10, sizes:["S", "M", "L"]});

    service.next();
    expect(router.lastRoute).toBe("price");

    service.next();
    expect(router.lastRoute).toBe("size-details");

    service.next();
    expect(router.lastRoute).toBe("checkout");
  });
});
