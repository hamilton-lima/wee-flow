import evaluate from "ts-expression-evaluator";
import {
  IWeeFlowConfig,
  IWeeflowState,
  IWeeFlowPersistence,
} from "./wee-flow.model";
import { LocalStoragePersistence } from "./localstorage";

export interface INavigator {
  navigate(route: string);
}

export class WeeFlowServiceImpl {
  private navigator: INavigator;

  protected state: IWeeflowState;
  protected persistence: IWeeFlowPersistence;

  constructor(navigator: INavigator) {
    this.navigator = navigator;
    this.persistence = new LocalStoragePersistence();
  }

  start(config: IWeeFlowConfig) {
    config = this.validate(config);
    this.state = <IWeeflowState>{ config: config, domainData: {} };
    this.state.config.currentRoute = this.state.config.startRoute;
    this.persistence.write(this.state);
    this.navigator.navigate(this.state.config.currentRoute);
  }

  set(updatedData: any) {
    if (!this.state) {
      console.warn(
        "[wee-flow] make sure the workflow is started before calling set()"
      );
      return;
    }

    this.state.domainData = updatedData;
    this.persistence.write(this.state);
  }

  next() {
    if (!this.state) {
      console.warn(
        "[wee-flow] make sure the workflow is started before calling next()"
      );
      return;
    }
    
    this.state.config.currentRoute = this.calculateNextRoute();
    this.persistence.write(this.state);

    this.navigator.navigate(this.state.config.currentRoute);
  }

  calculateNextRoute() {
    let result = this.state.config.startRoute;
    if (this.state.config.currentRoute) {
      result = this.evaluateRules();
    }

    return result;
  }

  evaluateRules() {
    let result = this.state.config.notFoundRoute;
    const rules = this.currentRules();

    for (let rule of rules) {
      if (evaluate(rule.expression, this.state.domainData)) {
        result = rule.route;
        break;
      }
    }

    return result;
  }

  // TODO: support not found
  currentRules() {
    const result = this.state.config.routes.find(
      (route) => route.name === this.state.config.currentRoute
    );
    return result.rules;
  }

  validate(config: IWeeFlowConfig) {
    if (!config.currentRoute) {
      config.currentRoute = config.startRoute;
    }
    // TODO: sort rules by order
    return config;
  }
}
