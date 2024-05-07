import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() label: string;
  @Input() fieldId: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() placeholder: string;
  @Input() control: UntypedFormControl;
  @Input() trim: boolean = false;

  @Output() fieldBlur = new EventEmitter<void>();

  onBlur(): void {
    this.fieldBlur.emit();

    if (this.trim) {
      this.trimField();
    }
  }

  private trimField(): void {
    if (!this.control.value) {
      return;
    }

    const trimControl = this.control.value.trim();

    this.control.setValue(trimControl);
  }
}
