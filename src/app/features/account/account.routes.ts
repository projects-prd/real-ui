import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/account-layout/account-layout').then((m) => m.AccountLayoutComponent),
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/profile-info/profile-info').then((m) => m.ProfileInfoComponent),
      },
      {
        path: 'security',
        loadComponent: () =>
          import('./components/security-settings/security-settings').then(
            (m) => m.SecuritySettingsComponent,
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./components/notification-settings/notification-settings').then(
            (m) => m.NotificationSettingsComponent,
          ),
      },
    ],
  },
];
