import evaluate from "ts-expression-evaluator";
import { IWeeFlowConfig } from "./wee-flow.model";

export interface INavigator {
  navigate(route: string);
}

export class WeeFlowServiceImpl {
  private domainData: any;
  private config: IWeeFlowConfig;
  private navigator: INavigator;

  constructor(navigator: INavigator) {
    this.navigator = navigator;
  }

  set(updatedData: any) {
    this.domainData = updatedData;
  }

  start(){
    this.config.currentRoute = this.config.startRoute;
    this.navigator.navigate(this.config.currentRoute);
  }

  next() {
    this.config.currentRoute = this.calculateNextRoute();
    this.navigator.navigate(this.config.currentRoute);
  }

  calculateNextRoute() {
    let result = this.config.startRoute;
    if (this.config.currentRoute) {
      result = this.evaluateRules();
    }

    return result;
  }

  evaluateRules() {
    let result = this.config.notFoundRoute;
    const rules = this.currentRules();

    for (let rule of rules) {
      if (evaluate(rule.expression, this.domainData)) {
        result = rule.route;
        break;
      }
    }

    return result;
  }

  // TODO: support not found
  currentRules() {
    const result = this.config.routes.find(
      (route) => route.name === this.config.currentRoute
    );
    return result.rules;
  }

  setConfig(config: IWeeFlowConfig) {
    this.config = this.validate(config);
  }

  validate(config: IWeeFlowConfig) {
    if (!config.currentRoute) {
      config.currentRoute = config.startRoute;
    }
    // TODO: sort rules by order
    return config;
  }
}
