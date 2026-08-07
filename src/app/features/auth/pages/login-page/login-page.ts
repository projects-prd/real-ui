import { Component, inject, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BaseComponent } from '@shared/base/base.component';
import { LoginFormComponent } from '@features/auth/components/login-form/login-form';
import { LoginCredentials } from '@features/auth/models/auth.model';
import { AuthService } from '@features/auth/services/auth.service';
import { finalize } from 'rxjs';
import { NotificationService } from '@core/services/notiification.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, LoginFormComponent],
  templateUrl: './login-page.html',
})
export class LoginPageComponent extends BaseComponent {
  private authService = inject(AuthService);
  public router = inject(Router);
  private notificationService = inject(NotificationService);
  loginForm = viewChild.required(LoginFormComponent);

  onLoginSubmit(credentials: LoginCredentials): void {
    const form = this.loginForm();
    form.isSubmitting.set(true);

    this.authService
      .login(credentials)
      .pipe(finalize(() => form.stopSubmitting()))
      .subscribe({
        next: () => {
          this.notificationService.success('ورود موفق', 'خوش آمدید! شما با موفقیت وارد شدید');
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.notificationService.error('خطا در ورود', 'نام کاربری یا رمز عبور اشتباه است');
          if (
            error?.code === 'auth/invalid-credential' ||
            error?.code === 'auth/user-not-found' ||
            error?.code === 'auth/wrong-password'
          ) {
            form.setServerErrors({
              email: 'ایمیل یا رمز عبور اشتباه است.',
            });
          } else {
            console.error('Firebase Auth Error:', error);
          }
        },
      });
  }

  onGoogleLogin(): void {
    this.authService.loginWithGoogle().subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => console.error(err),
    });
  }

  onForgotPassword(): void {
    this.router.navigate(['/auth/forgot-password']);
  }
}
