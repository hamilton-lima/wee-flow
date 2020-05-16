import { Injectable } from "@angular/core";
import { Product } from "./product-models";
import { WeeFlowService, IWeeFlowConfig } from "wee-flow";

@Injectable({
  providedIn: "root",
})
export class CheckoutService {
  readonly workflowConfig: IWeeFlowConfig = {
    name: "checkout-workflow",
    version: "1.0.0",
    startRoute: "start",
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

  private product: Product;
  constructor(private flow: WeeFlowService) {}

  start() {
    this.flow.start(this.workflowConfig);
  }

  restore(currentRoute: string) {
    this.flow.restore(currentRoute, this.workflowConfig);
  }

  next() {
    this.flow.next();
  }

  setProduct(product: Product) {
    this.product = product;
    this.flow.set(product);
    this.flow.next();
  }

  getProduct(): Product {
    return this.product;
  }
}
