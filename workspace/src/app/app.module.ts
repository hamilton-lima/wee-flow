import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StartComponent } from "./start/start.component";
import { ChooseProductComponent } from "./choose-product/choose-product.component";
import { SizeDetailsComponent } from "./size-details/size-details.component";
import { PriceComponent } from "./price/price.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { WeeFlowModule } from "wee-flow";
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ChooseProductComponent,
    SizeDetailsComponent,
    PriceComponent,
    CheckoutComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WeeFlowModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
