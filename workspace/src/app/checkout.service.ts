import { Injectable } from "@angular/core";
import { Product } from "./product-models";
import { WeeFlowService } from "wee-flow";
import { WeeFlowconfig } from "projects/wee-flow/src/lib/wee-flow.model";

@Injectable({
  providedIn: "root",
})
export class CheckoutService {

  readonly mockFlowconfig: WeeFlowconfig = {
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
    // this.flow.setConfig(this.mockFlowconfig);
  }

  setProduct(product: Product) {
    this.product = product;
  }

  getProduct(): Product {
    return this.product;
  }
}
