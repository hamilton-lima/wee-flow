import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import evaluate, { registerFunction } from "ts-expression-evaluator";
import { WeeFlowconfig } from "./wee-flow.model";
import { WeeFlowServiceImpl, INavigator } from "./wee-flow.service.impl";

@Injectable()
export class WeeFlowService implements INavigator {
  private implementation: WeeFlowServiceImpl;

  constructor(private router: Router) {
    this.implementation = new WeeFlowServiceImpl(this);
  }

  set(updatedData: any) {
    this.implementation.set(updatedData);
  }

  next() {
    this.implementation.next();
  }

  setConfig(config: WeeFlowconfig) {
    this.implementation.setConfig(config);
  }

  navigate(params: string) {
    this.router.navigate([params]);
  }
}
