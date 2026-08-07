import { Routes } from '@angular/router';

export const SERVICES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/services/services').then((m) => m.ServicesPageComponent),
    title: 'خدمات',
  },
];
