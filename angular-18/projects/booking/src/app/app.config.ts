import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { provideRouterFeature } from './shared/logic-router-state';
import { provideCustomElement, provideRouterDisconnect, provideZoneReuse } from './shared/util-federation-tools';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideCustomElement('mfe-booking', AppComponent),
    provideZoneReuse(),
    provideRouter(routes,
      withComponentInputBinding()
    ),
    provideRouterDisconnect(),
    provideHttpClient(),
    provideStore(),
    provideRouterFeature()
  ]
};
