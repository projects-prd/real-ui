import { Routes } from '@angular/router';
import { LoginPageComponent } from '@features/auth/pages/login-page/login-page';
import { RegisterPageComponent } from '@features/auth/pages/register-page/register-page';
import { HomeComponent } from '@features/home/home/home.component';
import { authGuard } from '@core/guards/auth.guard';
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
    path: 'auth',
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
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
