import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAllComponentsModule } from './material-all-components.module';
import { StartComponent } from './start/start.component';
import { ChooseProductComponent } from './choose-product/choose-product.component';
import { SizeDetailsComponent } from './size-details/size-details.component';
import { PriceComponent } from './price/price.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WeeFlowService } from 'projects/wee-flow/src/public-api';
import { WeeFlowModule } from 'wee-flow';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ChooseProductComponent,
    SizeDetailsComponent,
    PriceComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialAllComponentsModule,
    BrowserAnimationsModule, WeeFlowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
