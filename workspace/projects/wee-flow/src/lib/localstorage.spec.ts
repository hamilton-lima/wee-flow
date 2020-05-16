import { LocalStoragePersistence } from "./localstorage";
import { mockFlowconfig } from "./mock";
import { IWeeflowState } from "./wee-flow.model";

describe("WeeFlowServiceImpl", () => {
  it("should be created", () => {
    const persistence = new LocalStoragePersistence();
    expect(persistence).toBeTruthy();
  });

  it("should save and load the same object", () => {
    const state: IWeeflowState = {
      config: mockFlowconfig,
      domainData: { name: "foo", price: 42.16, next: true },
    };
    const persistence = new LocalStoragePersistence();
    persistence.write(state);

    const result = persistence.read(mockFlowconfig.name);
    expect(state).toEqual(result);
  });

});
