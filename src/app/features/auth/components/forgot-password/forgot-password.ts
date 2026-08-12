import { Component, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseFormComponent } from '@shared/base/base-form.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.html',
})
export class ForgotPasswordComponent extends BaseFormComponent {
  formSubmit = output<string>();

  protected buildForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  protected executeSubmit(): void {
    this.formSubmit.emit(this.form.value.email);
  }
}
