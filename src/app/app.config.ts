import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { interceptorInterceptor } from './core/interceptor/interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // provideEnvironmentNgxMask(),
    provideNgxMask(),
    provideHttpClient(
      // withFetch(),
      withInterceptors([interceptorInterceptor]),
    )
  ]
};
