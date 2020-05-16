import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { CheckoutService } from "./checkout.service";

@Injectable({
  providedIn: "root",
})
export class CheckoutWorkflowGuard implements CanActivate {
  constructor(private checkout: CheckoutService) {}

  canActivate(
    snapshot: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = snapshot.url.join('');
    console.log('url', url);
    this.checkout.restore(url);
    return true;
  }
}
