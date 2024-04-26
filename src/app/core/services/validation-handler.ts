import { UntypedFormControl, ValidationErrors } from '@angular/forms';
// Services
import { FormErrorData, ErrorHandlerService } from './error-handler.service';

export abstract class Validations {
  constructor(protected formError: ErrorHandlerService) {}

  private controlErrors(control: UntypedFormControl): ValidationErrors {
    return control ? control.errors : {};
  }

  private firstErrorData(control: UntypedFormControl): FormErrorData {
    const errors = this.controlErrors(control);

    return this.firstErrorKey(control) && errors[this.firstErrorKey(control)];
  }

  private firstErrorKey(control: UntypedFormControl): string {
    return (
      this.controlErrors(control) && Object.keys(this.controlErrors(control))[0]
    );
  }

  protected setErrorMessage(control: UntypedFormControl): string {
    if (!control) {
      return;
    }
    const key = this.firstErrorKey(control);
    return key ? this.formError.get(key, this.firstErrorData(control)) : null;
  }
}
