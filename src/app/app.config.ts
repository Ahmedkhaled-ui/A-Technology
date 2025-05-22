import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideTranslateService,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { headerInterceptor } from './core/interceptors/headre/header.interceptor';

export function translateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom([
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateFactory,
          deps: [HttpClient],
        },
      }),
    ]),
    provideHttpClient(withFetch(), withInterceptors([headerInterceptor])),
  ],
};
