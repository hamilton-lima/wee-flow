import { Injectable } from "@angular/core";
import { Product } from "./product-models";
import { WeeFlowService } from "wee-flow";
import { WeeFlowConfig } from "wee-flow";

@Injectable({
  providedIn: "root",
})
export class CheckoutService {

  readonly mockFlowconfig: WeeFlowConfig = {
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

  private product: Product;
  constructor(private flow: WeeFlowService) {}

  start() {
    this.flow.setConfig(this.mockFlowconfig);
    this.flow.start();
  }

  setProduct(product: Product) {
    this.product = product;
    this.flow.next();
  }

  getProduct(): Product {
    return this.product;
  }
}
