import { Version } from '@angular/core';

export interface IWeeFlowPersistence {
  write(state:IWeeflowState);
  read(name:string):IWeeflowState;
}

export interface IWeeflowState{
  name: string;
  version: string;
  domainData: any;
  currentRoute: string;
}

export interface IWeeFlowConfig {
  name: string;
  version: string;
  startRoute: string;
  notFoundRoute: string;
  routes: IWeeFlowRoute[];
}

export interface IWeeFlowRoute {
  name: string;
  rules: IWeeflowConfigRules[];
}

export interface IWeeflowConfigRules {
  expression: string;
  order: number;
  route: string;
}
