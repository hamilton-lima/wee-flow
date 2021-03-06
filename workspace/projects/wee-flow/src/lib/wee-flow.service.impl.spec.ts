import { INavigator, WeeFlowServiceImpl } from "./wee-flow.service.impl";
import { mockFlowconfig, goingNowhere } from "./mock";
import { IWeeflowState } from "./wee-flow.model";

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

  setState(state: IWeeflowState) {
    this.state = state;
  }
}

describe("WeeFlowServiceImpl", () => {
  beforeEach(() => {
    localStorage.clear();
  });

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

  it("should restore workflow state when calling restore()", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImplTest(router);
    service.start(mockFlowconfig);
    service.next();
    service.set({ price: 10, sizes: ["S", "M", "L"] });
    service.next();
    expect(router.lastRoute).toBe("price");

    const currentState = service.getState();

    // currentRoute is price with the domainData defined above
    // this will reset it
    service.setState(<IWeeflowState>{
      currentRoute: "foo",
      domainData: {},
      name: "bar",
      version: "1",
    });

    // validate the update of the current state
    expect(currentState).not.toEqual(service.getState());

    service.restore("price", mockFlowconfig);
    expect(currentState).toEqual(service.getState());

    // make sure it navigates back to the saved curretnRoute
    expect(router.lastRoute).toBe("price");
  });

  it("should NOT navigate when calling restore() if the route is the same", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImplTest(router);
    service.start(mockFlowconfig);
    service.next();
    service.set({ price: 10, sizes: ["S", "M", "L"] });
    service.next();
    expect(router.lastRoute).toBe("price");

    router.lastRoute = "nothing2seeHere";
    service.restore("price", mockFlowconfig);
    expect(router.lastRoute).toBe("nothing2seeHere");

    router.lastRoute = "nothing2seeHere";
    service.restore("orange-juice", mockFlowconfig);
    expect(router.lastRoute).toBe("price");
  });

  it("should call start if restore is called without saved state", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImplTest(router);
    service.restore("price", mockFlowconfig);
    service.next();
    expect(router.lastRoute).toBe("choose-product");
    expect(service.getState().currentRoute).toBe("choose-product");
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

  it("should check for isCurrentRoute( ) based on the state", () => {
    const router = new CustomRouter();
    const service = new WeeFlowServiceImplTest(router);

    service.setState(<IWeeflowState>{
      currentRoute: "foo",
      domainData: {},
      name: "bar",
      version: "1",
    });

    expect(service.isCurrentRoute("foo")).toBe(true);
    expect(service.isCurrentRoute("foo.bar")).toBe(false);
  });
});
