import { IWeeFlowPersistence, IWeeflowState } from "./wee-flow.model";

export class LocalStoragePersistence implements IWeeFlowPersistence {
  readonly PREFIX = "wee-flow-";
  write(state: IWeeflowState) {
    const name = this.PREFIX + state.name;
    const data = JSON.stringify(state);
    localStorage.setItem(name, data);
  }

  read(name: string): IWeeflowState {
    const item = this.PREFIX + name;
    const json = localStorage.getItem(item);
    const result: IWeeflowState = JSON.parse(json);
    return result;
  }
}
