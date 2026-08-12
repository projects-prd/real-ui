import { Routes } from '@angular/router';
import { LoginPageComponent } from '@features/auth/pages/login-page/login-page';
import { RegisterPageComponent } from '@features/auth/pages/register-page/register-page';
import { ForgotPasswordPage } from '@features/auth/pages/forgot-password-page/forgot-password-page';
import { HomeComponent } from '@features/home/pages/home/home.component';
import { authGuard } from '@core/guards/auth.guard';
import { guestGuard } from '@core/guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'صفحه اصلی',
    canActivate: [authGuard],
  },
  {
    path: 'account',
    title: 'حساب کاربری',
    canActivate: [authGuard],
    loadChildren: () => import('./features/account/account.routes').then((m) => m.ACCOUNT_ROUTES),
  },
  {
    path: 'services',
    title: 'خدمات',
    loadChildren: () =>
      import('./features/services/services.routes').then((m) => m.SERVICES_ROUTES),
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        title: 'ورود به حساب کاربری',
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        title: 'ثبت‌نام',
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordPage,
        title: 'بازیابی رمز عبور',
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];
