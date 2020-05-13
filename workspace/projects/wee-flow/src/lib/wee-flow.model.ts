export interface WeeFlowconfig {
  startRoute: string;
  notFoundRoute: string;
  currentRoute: string;
  routes: WeeFlowRoute[];
}

export interface WeeFlowRoute {
  name: string;
  rules: WeeflowConfigRules[];
}

export interface WeeflowConfigRules {
  expression: string;
  order: number;
  route: string;
}
