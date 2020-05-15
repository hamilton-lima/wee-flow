import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product-models';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-choose-product',
  templateUrl: './choose-product.component.html',
  styleUrls: ['./choose-product.component.scss']
})
export class ChooseProductComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductService, private checkout: CheckoutService) { }

  ngOnInit() {
    this.products = this.service.findAll();
  }

  buy(product: Product){
    this.checkout.setProduct(product);
  }

}
