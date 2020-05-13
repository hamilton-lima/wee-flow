import { Component, OnInit } from "@angular/core";
import { LoremIpsumService } from "../lorem-ipsum.service";
import { WeeFlowService } from "wee-flow";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
  sample: string;
  message: string;

  constructor(private lorem: LoremIpsumService, private flow: WeeFlowService) {
    this.sample = lorem.paragraphs();
  }

  ngOnInit() {}

  done() {
    this.message = this.flow.next();
  }
}
