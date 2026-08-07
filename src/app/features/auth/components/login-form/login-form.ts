import { Component, output, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '@shared/base/base-form.component';
import { LoginCredentials } from '../../models/auth.model';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, PasswordModule, ButtonModule, CheckboxModule],
  templateUrl: 'login-form.html',
  styleUrls: ['login-form.scss'],
})
export class LoginFormComponent extends BaseFormComponent {
  formSubmit = output<LoginCredentials>();
  googleLogin = output<void>();
  forgotPasswordClick = output<void>();

  protected readonly showPassword = signal<boolean>(false);

  protected togglePasswordVisibility(): void {
    this.showPassword.update((visible) => !visible);
  }
  protected buildForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  protected executeSubmit(): void {
    this.formSubmit.emit(this.form.value as LoginCredentials);
  }
}
