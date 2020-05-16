export interface IWeeFlowPersistence {
  write(state:IWeeflowState);
  read(name:string):IWeeflowState;
}

export interface IWeeflowState{
  config: IWeeFlowConfig;
  domainData: any;
}

export interface IWeeFlowConfig {
  name: string;
  startRoute: string;
  notFoundRoute: string;
  currentRoute: string;
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
