import { Component, forwardRef, Input } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgControlComponent } from '../../ng-control/ng-control.component';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-radio',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
  imports: [NgClass, AsyncPipe],
  templateUrl: './radio.component.html',
  styleUrls: ['../cr.base.component.scss',  './radio.component.scss', '../themes/themes.scss']
})
export class RadioComponent extends NgControlComponent {
  @Input()
  set label(val: string) {
    this._label = val;
  }
  get label(): string {
    return this._label;
  }
  private _label: string;
  @Input()
  set name(val: string) {
    this._name = val;
  }
  get name(): string {
    return this._name;
  }
  private _name: string = '';

  onInput(event: Event) {
    this.setValue((event.target as HTMLInputElement).value);
  }
}
