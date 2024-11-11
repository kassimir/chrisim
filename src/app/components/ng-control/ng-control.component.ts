import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Theme, ThemeService } from '../../services/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  template: '',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgControlComponent),
      multi: true,
    },
  ],
  standalone: true
})
export class NgControlComponent implements ControlValueAccessor {
  protected set value(val: any) {
    this._value = val;
  }
  protected get value(): any {
    return this._value;
  }
  _value: any = 'no value';

 protected theme: BehaviorSubject<Theme> = ThemeService.theme;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }
}
