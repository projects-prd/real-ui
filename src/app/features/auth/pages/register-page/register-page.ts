import { Component, inject, ViewChild } from '@angular/core';
import { RegisterFormComponent } from '@features/auth/components/register-form/register-form';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { finalize } from 'rxjs';
import { NotificationService } from '@core/services/notiification.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterFormComponent, RouterLink],
  templateUrl: 'register-page.html',
  styleUrl: 'register-page.scss',
})
export class RegisterPageComponent {
  @ViewChild(RegisterFormComponent) registerForm!: RegisterFormComponent;
  private authService = inject(AuthService);
  private router = inject(Router);
  private notificationService = inject(NotificationService);
  onRegisterSubmit(formData: any): void {
    this.authService
      .registerUser(formData)
      .pipe(finalize(() => this.registerForm?.stopSubmitting()))
      .subscribe({
        next: () => {
          this.notificationService.success(
            'ثبت‌نام موفق',
            'حساب شما ساخته شد و وارد شدید.',
          );
          this.router.navigate(['/home']);
        },
        error: (error) => {
          const message =
            error?.code === 'auth/email-already-in-use'
              ? 'این ایمیل قبلاً ثبت شده است.'
              : 'ثبت‌نام انجام نشد. لطفاً دوباره تلاش کنید.';
          this.notificationService.error('خطا در ثبت‌نام', message);
        },
      });
  }
}
