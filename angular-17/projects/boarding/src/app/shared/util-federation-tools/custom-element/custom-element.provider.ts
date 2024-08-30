import { ENVIRONMENT_INITIALIZER, EnvironmentProviders, inject, Injector, makeEnvironmentProviders, Type } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export function provideCustomElement(
  tagname: string,
  component: Type<unknown>
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => customElements.define(
        tagname,
        createCustomElement(component, { injector: inject(Injector) })
      )
    }
  ]);
}
