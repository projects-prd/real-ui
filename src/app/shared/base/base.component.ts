import { DestroyRef, Directive, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormUtils } from '@core/utils/form.utils';
import { NotificationService } from '@core/services/notiification.service';
import { LoadingService } from '@core/services/loading.service';

@Directive()
export abstract class BaseComponent {
  protected router = inject(Router);
  protected destroyRef = inject(DestroyRef);
  public isLoading = signal<boolean>(false);
  protected notificationService = inject(NotificationService);
  protected loadingService = inject(LoadingService);
  public isFieldInvalid = FormUtils.isFieldInvalid;
  public getFieldError = FormUtils.getFieldError;
  public markFormGroupTouched = FormUtils.markFormGroupTouched;
}
