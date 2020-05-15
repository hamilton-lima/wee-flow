import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Product } from '../product-models';

@Component({
  selector: 'app-size-details',
  templateUrl: './size-details.component.html',
  styleUrls: ['./size-details.component.scss']
})
export class SizeDetailsComponent implements OnInit {
  product: Product;

  constructor(private checkout: CheckoutService) {}

  ngOnInit() {
    this.product = this.checkout.getProduct();
  }

  continue() {
    this.checkout.next();
  }
}
