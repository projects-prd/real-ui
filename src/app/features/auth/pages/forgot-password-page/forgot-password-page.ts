import { Component, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '@features/auth/services/auth.service';
import { NotificationService } from '@core/services/notiification.service';
import { ForgotPasswordComponent } from '@features/auth/components/forgot-password/forgot-password';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [ForgotPasswordComponent, RouterLink],
  templateUrl: './forgot-password-page.html',
})
export class ForgotPasswordPage {
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  forgotPasswordForm = viewChild.required(ForgotPasswordComponent);

  onResetSubmit(email: string): void {
    const form = this.forgotPasswordForm();
    form.isSubmitting.set(true);

    this.authService
      .resetPassword(email)
      .pipe(finalize(() => form.stopSubmitting()))
      .subscribe({
        next: () => {
          this.notificationService.success(
            'ایمیل ارسال شد',
            'لینک بازیابی رمز عبور به ایمیل شما ارسال شد.',
          );
        },
        error: () => {
          this.notificationService.error(
            'خطا',
            'ارسال ایمیل بازیابی انجام نشد. ایمیل را بررسی کنید.',
          );
        },
      });
  }
}
