import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'boarding',
    pathMatch: 'full'
  },
  {
    path: 'boarding',
    providers: [],
    loadChildren: () => import('./boarding')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
