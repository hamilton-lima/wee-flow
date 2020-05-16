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

  protected config: IWeeFlowConfig;
  protected state: IWeeflowState;
  protected persistence: IWeeFlowPersistence;

  constructor(navigator: INavigator) {
    this.navigator = navigator;
    this.persistence = new LocalStoragePersistence();
  }

  start(config: IWeeFlowConfig) {
    this.config = this.validate(config);
    this.state = <IWeeflowState>{
      name: this.config.name,
      version: this.config.version,
      currentRoute: this.config.startRoute,
      domainData: {},
    };
    this.persistence.write(this.state);
    this.navigator.navigate(this.state.currentRoute);
  }

  restore(currenRoute: string, config: IWeeFlowConfig) {
    this.config = this.validate(config);
    this.state = this.persistence.read(this.config.name);
    if (!this.state) {
      this.start(config);
    } else {
      // prevents loop in route guards
      if (!this.isCurrentRoute(currenRoute)) {
        this.navigator.navigate(this.state.currentRoute);
      }
    }
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

    this.state.currentRoute = this.calculateNextRoute();
    this.persistence.write(this.state);

    this.navigator.navigate(this.state.currentRoute);
  }

  isCurrentRoute(route: string) {
    return this.state.currentRoute === route;
  }

  calculateNextRoute() {
    let result = this.config.startRoute;
    if (this.state.currentRoute) {
      result = this.evaluateRules();
    }

    return result;
  }

  evaluateRules() {
    let result = this.config.notFoundRoute;
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
    const result = this.config.routes.find(
      (route) => route.name === this.state.currentRoute
    );
    return result.rules;
  }

  validate(config: IWeeFlowConfig) {
    // TODO: sort rules by order
    return config;
  }
}
