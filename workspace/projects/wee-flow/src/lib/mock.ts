import { IWeeFlowConfig } from '../public-api';

export const mockFlowconfig: IWeeFlowConfig = {
    name: "mock-config",
    startRoute: "start",
    currentRoute: null,
    notFoundRoute: "notfound",
    routes: [
      {
        name: "start",
        rules: [{ expression: "true", order: 0, route: "choose-product" }],
      },
      {
        name: "choose-product",
        rules: [
          { expression: "price > 0", order: 0, route: "price" },
          { expression: "sizes.length > 0", order: 1, route: "size-details" },
          { expression: "true", order: 2, route: "checkout" },
        ],
      },
      {
        name: "price",
        rules: [
          { expression: "sizes.length > 0", order: 1, route: "size-details" },
          { expression: "true", order: 2, route: "checkout" },
        ],
      },
      {
        name: "size-details",
        rules: [{ expression: "true", order: 0, route: "checkout" }],
      },
    ],
  };
