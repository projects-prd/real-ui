import { Directive, inject, signal, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from './base.component';

@Directive()
export abstract class BaseFormComponent extends BaseComponent implements OnInit {
  protected fb = inject(FormBuilder);

  public form!: FormGroup;

  public isSubmitting = signal<boolean>(false);
  public isSubmitted = signal<boolean>(false);

  ngOnInit(): void {
    this.form = this.buildForm();
  }

  protected abstract buildForm(): FormGroup;

  public onSubmit(): void {
    this.isSubmitted.set(true);

    if (this.form.invalid) {
      this.markFormGroupTouched(this.form);
      return;
    }

    this.isSubmitting.set(true);
    this.executeSubmit();
  }

  protected abstract executeSubmit(): void;

  public stopSubmitting(): void {
    this.isSubmitting.set(false);
  }

  public resetForm(): void {
    this.form.reset();
    this.isSubmitted.set(false);
    this.isSubmitting.set(false);
  }

  public setServerErrors(errors: Record<string, string>): void {
    if (errors) {
      Object.keys(errors).forEach((field) => {
        const control = this.form.get(field);
        if (control) {
          control.setErrors({ serverError: errors[field] });
        }
      });
    }
    this.stopSubmitting();
  }
}
