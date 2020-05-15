import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { CheckoutService } from "../checkout.service";
import { Product } from "../product-models";

@Component({
  selector: "app-price",
  templateUrl: "./price.component.html",
  styleUrls: ["./price.component.scss"],
})
export class PriceComponent implements OnInit {
  product: Product;

  constructor(private checkout: CheckoutService) {}

  ngOnInit() {
    this.product = this.checkout.getProduct();
  }

  continue() {
    this.checkout.next();
  }
}
