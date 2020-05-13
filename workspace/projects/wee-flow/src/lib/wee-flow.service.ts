import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WeeFlowService {
  constructor() {}

  next() {
    return "hello, I am wee-flow, how are you?";
  }
}
