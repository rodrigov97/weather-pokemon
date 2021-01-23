import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Validations } from 'src/app/core/services/validation-handler';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent extends Validations implements OnInit {

  @Input() label: string;
  @Input() fieldId: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() trim: boolean = false;
  @Input() hideError: boolean = false;

  @Input() forceErrorMessage: string;

  @Output() fieldBlur = new EventEmitter<void>();

  objectFn = Object;

  constructor(
    formError: ErrorHandlerService
  ) {
    super(formError)
  }

  ngOnInit(): void {
  }

  isInvalid(): boolean {
    return !!this.forceErrorMessage || (this.control.touched && this.control.invalid);
  }

  isValid(): boolean {
    return !this.forceErrorMessage && this.control.touched && this.control.valid;
  }

  get errorMessage(): string {
    return this.setErrorMessage(this.control);
  }

  onBlur(): void {
    this.fieldBlur.emit();
    if (this.trim) { this.trimField(); }
  }

  private trimField(): void {
    if (!this.control.value) { return; }

    const trimControl = this.control.value.trim();
    this.control.setValue(trimControl);
  }
}
