import { TestBed } from "@angular/core/testing";

import { CheckoutService } from "./checkout.service";
import { WeeFlowService } from "wee-flow/wee-flow";
import { Router, RouterModule } from "@angular/router";
import { AppModule } from "./app.module";
import { APP_BASE_HREF } from "@angular/common";

describe("CheckoutService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
      imports: [RouterModule.forRoot([])],
    })
  );

  it("should be created", () => {
    const service: CheckoutService = TestBed.get(CheckoutService);
    expect(service).toBeTruthy();
  });
});
