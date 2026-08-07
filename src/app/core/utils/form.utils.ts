import { FormGroup } from '@angular/forms';

export class FormUtils {
  static isFieldInvalid(form: FormGroup, fieldName: string): boolean {
    const control = form.get(fieldName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    const control = form.get(fieldName);
    if (!control || !control.errors || !(control.touched || control.dirty)) return null;

    if (control.errors['required']) return 'این فیلد اجباری است.';
    if (control.errors['email']) return 'لطفاً یک ایمیل معتبر وارد کنید.';
    if (control.errors['minlength'])
      return `حداقل ${control.errors['minlength'].requiredLength} کاراکتر وارد کنید.`;

    return 'مقدار وارد شده معتبر نیست.';
  }

  static markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if ((control as any).controls) {
        FormUtils.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
