import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  template: ``,
})
export class FormComponentBase implements ControlValueAccessor {
  private _value: any;

  constructor(private cdr: ChangeDetectorRef) {}

  @Output() valueChanged = new EventEmitter<any>();

  @Input()
  get value(): any {
    return this._value;
  }
  set value(v: any) {
    if (this._value !== v) {
      this._value = v;
      this.onChange(v);
      this.markAsTouched();
      this.cdr.markForCheck();
      this.valueChanged.emit(v);
    }
  }

  onChange = (v: any) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
