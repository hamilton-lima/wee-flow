import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  constructor(private checkout: CheckoutService) {
  }

  ngOnInit(): void {
  }

  start(){
    this.checkout.start();
  }

}
