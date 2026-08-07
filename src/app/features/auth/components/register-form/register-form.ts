import { Component, EventEmitter, inject, output, Output, signal } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { BaseFormComponent } from '@shared/base/base-form.component';
import { LoginCredentials, RegisterCredentials } from '@features/auth/models/auth.model';
import { AuthService } from '@features/auth/services/auth.service';

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  if (password && confirmPassword && password !== confirmPassword) {
    return { passwordMismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: 'register-form.scss',
})
export class RegisterFormComponent extends BaseFormComponent {
  @Output() googleRegister = new EventEmitter<void>();
  formSubmit = output<RegisterCredentials>();
  private authService = inject(AuthService);
  protected readonly showPassword = signal(false);
  protected readonly showConfirmPassword = signal(false);

  protected buildForm(): FormGroup {
    return this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        acceptTerms: [false, [Validators.requiredTrue]],
      },
      { validators: passwordMatchValidator },
    );
  }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((visible) => !visible);
  }

  protected toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword.update((visible) => !visible);
  }

  protected executeSubmit(): void {
    const { confirmPassword, acceptTerms, ...formValues } = this.form.value;

    const payload = {
      id: crypto.randomUUID(),
      ...formValues,
    };

    this.formSubmit.emit(payload);
  }
}
