import { Component, OnInit } from "@angular/core";
import { EXTERNAL_URI } from "src/app/app.constants";
import { TranslateConfigService } from "src/app/shared/services/translate-config.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(private translateConfigService: TranslateConfigService) {
    this.translateConfigService.setDefaultLanguage();
    if (window.addEventListener) {
      window.addEventListener("message", this.listener.bind(this), false);
    }
  }

  ngOnInit() {}

  private listener(event: MessageEvent) {
    if (event.origin === EXTERNAL_URI) {
      if (event.data && typeof event.data === "string") {
        this.translateConfigService.setLanguage(event.data);
      }
    }
  }
}
