import { Component } from '@angular/core';
import translationsEN from '../../../../public/i18n/en.json';
import translationsAR from '../../../../public/i18n/ar.json';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isRtl: boolean = true;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');
    this.translate.setTranslation('ar', translationsAR);
    this.translate.setDefaultLang('ar');
  }

  directionArabic() {
    if ((this.isRtl = false)) {
      this.isRtl = !this.isRtl;

      document.documentElement.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', this.isRtl ? 'ar' : 'en');
    } else {
      this.isRtl = !this.isRtl;

      document.documentElement.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', this.isRtl ? 'ar' : 'en');
    }
  }
  direction() {
    if (this.isRtl) {
      this.isRtl = !this.isRtl;

      document.documentElement.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', this.isRtl ? 'ar' : 'en');
    } else {
      this.isRtl = !this.isRtl;

      document.documentElement.setAttribute('dir', this.isRtl ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', this.isRtl ? 'ar' : 'en');
    }
  }

  Arabic() {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');
    this.translate.setTranslation('ar', translationsAR);
    this.translate.setDefaultLang('ar');
  }
  English() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.translate.setTranslation('en', translationsEN);
    this.translate.setDefaultLang('en');
  }
}
