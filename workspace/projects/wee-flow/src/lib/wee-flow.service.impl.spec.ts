import { INavigator, WeeFlowServiceImpl } from "./wee-flow.service.impl";
import { mockFlowconfig, goingNowhere } from "./mock";

class CustomRouter implements INavigator {
  lastRoute: string;
  public navigate(route) {
    this.lastRoute = route;
  }
}

class WeeFlowServiceImplTest extends WeeFlowServiceImpl {
  getPersistence() {
    return this.persistence;
  }
  getState() {
    return this.state;
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
    service.start(mockFlowconfig);

    expect(router.lastRoute).toBe("start");
  });

  it("should use expression to navigate to the next page", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImpl(router);
    service.start(mockFlowconfig);
    service.next();
    expect(router.lastRoute).toBe("choose-product");

    service.set({ price: 10, sizes: ["S", "M", "L"] });

    service.next();
    expect(router.lastRoute).toBe("price");

    service.next();
    expect(router.lastRoute).toBe("size-details");

    service.next();
    expect(router.lastRoute).toBe("checkout");
  });

  it("should go to notfound route if no condition rules is satisfied", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImpl(router);
    service.start(goingNowhere);
    service.next();
    expect(router.lastRoute).toBe("notfound");
  });

  it("should persist when calling start()", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImplTest(router);
    service.start(mockFlowconfig);

    const savedState = service.getPersistence().read(mockFlowconfig.name);
    expect(service.getState()).toEqual(savedState);
  });

  it("should persist when calling set()", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImplTest(router);
    service.start(mockFlowconfig);
    service.set({ price: 42.16, sizes: [true, false, "abc", 43.123] });

    const savedState = service.getPersistence().read(mockFlowconfig.name);
    expect(service.getState()).toEqual(savedState);
  });

  it("should persist when calling next()", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImplTest(router);
    service.start(mockFlowconfig);
    service.next();

    const savedState = service.getPersistence().read(mockFlowconfig.name);
    expect(service.getState()).toEqual(savedState);
  });
  
});
