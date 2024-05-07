import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

import { FormInputComponent } from './form-input.component';

const LABEL = 'Label Text';
const FIELD_ID = 'FieldId';
const NAME = 'InputName';
const TYPE = 'text';
const PLACEHOLDER = 'Placeholder Text';
const CONTROL = new UntypedFormControl();
const TRIM = true;

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInputComponent],
      imports: [CommonModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;

    component.label = LABEL;
    component.fieldId = FIELD_ID;
    component.name = NAME;
    component.type = TYPE;
    component.placeholder = PLACEHOLDER;
    component.control = CONTROL;
    component.trim = TRIM;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have @Input values', () => {
    expect(component.label).toEqual('Label Text');
    expect(component.fieldId).toEqual('FieldId');
    expect(component.name).toEqual('InputName');
    expect(component.type).toEqual('text');
    expect(component.placeholder).toEqual('Placeholder Text');
    expect(component.control).toBeInstanceOf(UntypedFormControl);
    expect(component.trim).toEqual(true);
  });

  describe('onBlur', () => {
    it('should have emitted fieldBlur event', () => {
      jest.spyOn(component, 'onBlur');
      jest.spyOn(component.fieldBlur, 'emit');

      component.onBlur();

      expect(component.onBlur).toHaveBeenCalledTimes(1);
      expect(component.fieldBlur.emit).toHaveBeenCalledTimes(1);
    });

    it('should trim control value', () => {
      component.trim = true;

      component.control.setValue('Test Value ');

      fixture.detectChanges();

      jest.spyOn(component, 'onBlur');

      component.onBlur();

      fixture.detectChanges();

      expect(component.onBlur).toHaveBeenCalledTimes(1);
      expect(component.control.value).toEqual('Test Value');
    });

    it('should not trim control value when is different of null', () => {
      component.trim = false;

      component.control.setValue('Test Value ');

      fixture.detectChanges();

      jest.spyOn(component, 'onBlur');

      component.onBlur();

      fixture.detectChanges();

      expect(component.onBlur).toHaveBeenCalledTimes(1);
      expect(component.control.value).toEqual('Test Value ');
    });

    it('should not trim control value when is equal to null', () => {
      component.trim = true;

      component.control.setValue(null);

      fixture.detectChanges();

      jest.spyOn(component, 'onBlur');

      component.onBlur();

      fixture.detectChanges();

      expect(component.onBlur).toHaveBeenCalledTimes(1);
      expect(component.control.value).toEqual(null);
    });
  });
});
