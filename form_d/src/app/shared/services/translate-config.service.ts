import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class TranslateConfigService {
  constructor(private translate: TranslateService) {}

  setDefaultLanguage() {
    let currentLang = this.getCurrentLang();

    if (!currentLang || typeof currentLang !== "string") {
      currentLang = "en";
      localStorage.setItem("lang", currentLang);
    }

    this.translate.setDefaultLang(currentLang);
    this.translate.use(currentLang);
  }

  setLanguage(setLang: string) {
    this.translate.use(setLang);
    localStorage.setItem("lang", setLang);
  }

  getCurrentLang() {
    return localStorage.getItem("lang");
  }
}
