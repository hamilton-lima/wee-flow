import { Injectable } from "@angular/core";
import { Product } from "./product-models";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}
  readonly mockProducts: Product[] = [
    { name: "Flying Pig", price: 10000, sizes: [] },
    { name: "Picle Rick", price: 0, sizes: ["Small", "Medium", "Large"] },
    { name: "Rubick cube", price: 34, sizes: ["Small", "Medium"] },
  ];

  findAll(): Product[] {
    return this.mockProducts;
  }
}
