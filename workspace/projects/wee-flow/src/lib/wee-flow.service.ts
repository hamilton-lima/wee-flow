import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import evaluate, { registerFunction } from "ts-expression-evaluator";
import { WeeFlowconfig } from "./wee-flow.model";

@Injectable({
  providedIn: "root",
})
export class WeeFlowService {
  private domainData: any;
  private config: WeeFlowconfig;

  constructor(private router: Router) {}

  next() {
    this.config.currentRoute = this.calculateNextRoute();
    this.router.navigate([this.config.currentRoute]);
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

  setConfig(config: WeeFlowconfig) {
    this.config = this.validate(config);
  }

  validate(config: WeeFlowconfig) {
    if (!config.currentRoute) {
      config.currentRoute = config.startRoute;
    }
    // TODO: sort rules by order
    return config;
  }

  set(updatedData: any) {
    this.domainData = updatedData;
  }
}
