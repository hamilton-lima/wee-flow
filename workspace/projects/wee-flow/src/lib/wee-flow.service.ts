import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class WeeFlowService {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(["choose-product"]);
  }
}
