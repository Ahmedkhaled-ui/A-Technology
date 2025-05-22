import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  inject,
  Injectable,
  PLATFORM_ID,
  RendererFactory2,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  private readonly renderer = inject(RendererFactory2).createRenderer(
    null,
    null
  );

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private id: object
  ) {
    if (isPlatformBrowser(this.id)) {
      // set defuilt lang

      let saveLang = localStorage.getItem('lange');
      if (saveLang) {
        this.translateService.use(saveLang);
      }

      //get lang
      this.translateService.setDefaultLang('en');

      //use

      this.changeDirection();
    }
  }

  changeDirection(): void {
    if (localStorage.getItem('lange') === 'en') {
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
      this.renderer.setAttribute(document.documentElement, 'lang', 'en');
    } else if (localStorage.getItem('lange') === 'ar') {
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
      this.renderer.setAttribute(document.documentElement, 'lang', 'ar');
    }
  }

  changeLange(lang: string): void {
    // set lang
    localStorage.setItem('lange', lang);
    this.translateService.use(lang);
    this.changeDirection();
  }
}
