import { TestBed } from "@angular/core/testing";
import { INavigator, WeeFlowServiceImpl } from "./wee-flow.service.impl";
import { WeeFlowConfig } from './wee-flow.model';

class CustomRouter implements INavigator {
  lastRoute: string;
  public navigate(route) {
    this.lastRoute = route;
  }
}

const mockFlowconfig: WeeFlowConfig = {
  startRoute: "start",
  currentRoute: null,
  notFoundRoute: "notfound",
  routes: [
    {
      name: "start",
      rules: [{ expression: "true", order: 0, route: "choose-product" }],
    },
    {
      name: "choose-product",
      rules: [
        { expression: "price > 0", order: 0, route: "price" },
        { expression: "sizes.length > 0", order: 1, route: "size-details" },
        { expression: "true", order: 2, route: "checkout" },
      ],
    },
    {
      name: "price",
      rules: [
        { expression: "sizes.length > 0", order: 1, route: "size-details" },
        { expression: "true", order: 2, route: "checkout" },
      ],
    },
    {
      name: "size-details",
      rules: [{ expression: "true", order: 0, route: "checkout" }],
    },
  ],
};

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
