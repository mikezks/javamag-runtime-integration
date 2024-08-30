import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { provideCustomElement, provideRouterDisconnect, provideZoneReuse } from './shared/util-federation-tools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideCustomElement('mfe-boarding', AppComponent),
    provideZoneReuse(),
    provideRouter(routes,
      withComponentInputBinding()
    ),
    provideRouterDisconnect(),
    provideHttpClient()
  ]
};
