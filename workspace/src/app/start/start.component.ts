import { Component, OnInit } from "@angular/core";
import { LoremIpsumService } from "../lorem-ipsum.service";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
  sample: string;
  constructor(private lorem: LoremIpsumService) {
    this.sample = lorem.sentence();
  }

  ngOnInit() {}
}
