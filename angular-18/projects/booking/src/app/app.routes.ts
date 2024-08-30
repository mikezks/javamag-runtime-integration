import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ticketFeature } from './booking/logic-flight/+state/reducer';
import { TicketEffects } from './booking/logic-flight/+state/effects';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full'
  },
  {
    path: 'booking',
    providers: [
      provideState(ticketFeature),
      provideEffects([TicketEffects]),
    ],
    loadChildren: () => import('./booking')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
