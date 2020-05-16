import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./start/start.component";
import { ChooseProductComponent } from "./choose-product/choose-product.component";
import { SizeDetailsComponent } from "./size-details/size-details.component";
import { PriceComponent } from "./price/price.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { EmptyComponent } from "./empty/empty.component";
import { CheckoutWorkflowGuard } from "./checkout-workflow.guard";

const routes: Routes = [
  { path: "empty", component: EmptyComponent },
  {
    path: "start",
    component: StartComponent,
    canActivate: [CheckoutWorkflowGuard],
  },
  {
    path: "choose-product",
    component: ChooseProductComponent,
    canActivate: [CheckoutWorkflowGuard],
  },
  {
    path: "size-details",
    component: SizeDetailsComponent,
    canActivate: [CheckoutWorkflowGuard],
  },
  {
    path: "price",
    component: PriceComponent,
    canActivate: [CheckoutWorkflowGuard],
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [CheckoutWorkflowGuard],
  },
  { path: "", redirectTo: "/empty", pathMatch: "full" }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
