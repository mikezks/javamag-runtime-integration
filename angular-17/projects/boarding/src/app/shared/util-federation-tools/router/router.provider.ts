import { LocationStrategy } from '@angular/common';
import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders } from '@angular/core';
import { Router } from '@angular/router';
import { NoopLocationStrategy } from './noop-location-strategy';


export function provideRouterDisconnect(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: LocationStrategy,
      useFactory: () => inject(NoopLocationStrategy)
    },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(Router).initialNavigation()
    }
  ]);
}


