import { Routes } from '@angular/router';
import { HomeComponent } from './shared/feature-core';
import { multiVersionConfig, MultiVersionWrapper } from './shared/util-federation-tools';


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'booking',
    component: MultiVersionWrapper,
    data: multiVersionConfig('booking', './bootstrap-custom-element', 'mfe-booking')
  },
  /* {
    path: 'booking',
    loadChildren: () => {
      return import('./checkin/checkin.routes');
      return loadRemoteModule()
    }
  }, */
  {
    path: 'checkin',
    component: MultiVersionWrapper,
    data: multiVersionConfig('checkin', './bootstrap-custom-element', 'mfe-checkin')
  },
  {
    path: 'boarding',
    component: MultiVersionWrapper,
    data: multiVersionConfig('boarding', './bootstrap-custom-element', 'mfe-boarding')
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


