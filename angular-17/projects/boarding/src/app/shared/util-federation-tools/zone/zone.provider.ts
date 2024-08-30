import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, makeEnvironmentProviders, NgZone } from '@angular/core';

declare global {
  var ngZone: NgZone;
}


export function provideZoneSharing(): EnvironmentProviders {
  return makeEnvironmentProviders([{
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => globalThis.ngZone = inject(NgZone)
  }]);
}

export function provideZoneReuse(): EnvironmentProviders {
  return makeEnvironmentProviders([
    globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : []
  ]);
}

