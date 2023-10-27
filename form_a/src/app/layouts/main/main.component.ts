import { Component, OnInit, Renderer2 } from "@angular/core";
import { EXTERNAL_URI, SCRIPT_PATH } from "src/app/app.constants";
import { ScriptService } from "src/app/shared/services/script.service";
import { TranslateConfigService } from "src/app/shared/services/translate-config.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor(
    private translateConfigService: TranslateConfigService,
    private renderer: Renderer2,
    private scriptService: ScriptService
  ) {
    this.translateConfigService.setDefaultLanguage();
    if (window.addEventListener) {
      window.addEventListener("message", this.listener.bind(this), false);
    }
  }

  ngOnInit() {
    this.scriptService.loadScript(this.renderer, SCRIPT_PATH);
  }

  private listener(event: MessageEvent) {
    if (event.origin === EXTERNAL_URI) {
      if (event.data && typeof event.data === "string") {
        this.translateConfigService.setLanguage(event.data);
      }
    }
  }
}
