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
        next: (data) => {
          this.notificationService.success('ثبت نام با موفقیت انجام شد', 'خوش آمدید! اطلاعات شما با موفقیت ثبت شد');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
