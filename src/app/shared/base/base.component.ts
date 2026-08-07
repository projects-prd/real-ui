import { Directive, inject, signal, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormUtils } from '@core/utils/form.utils';

@Directive()
export abstract class BaseComponent {
  protected router = inject(Router);
  protected destroyRef = inject(DestroyRef);
  public isLoading = signal<boolean>(false);

  public isFieldInvalid = FormUtils.isFieldInvalid;
  public getFieldError = FormUtils.getFieldError;
  public markFormGroupTouched = FormUtils.markFormGroupTouched;
}
