import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ChooseProductComponent } from './choose-product/choose-product.component';
import { SizeDetailsComponent } from './size-details/size-details.component';
import { PriceComponent } from './price/price.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'choose-product', component: ChooseProductComponent },
  { path: 'size-details', component: SizeDetailsComponent },
  { path: 'price', component: PriceComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '',   redirectTo: '/start', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
