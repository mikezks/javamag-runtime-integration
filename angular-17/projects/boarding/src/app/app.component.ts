import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectNavigationOnDestroy } from './shared/util-federation-tools';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent {
  constructor() {
    injectNavigationOnDestroy()
  }
}
