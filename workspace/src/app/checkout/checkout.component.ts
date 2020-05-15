import { Component, OnInit } from "@angular/core";
import { CheckoutService } from "../checkout.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  constructor(private checkout: CheckoutService) {}

  ngOnInit() {}

  reset() {
    this.checkout.start();
  }
}
