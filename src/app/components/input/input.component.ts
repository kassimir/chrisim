import { Component, forwardRef, Input } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { NgControlComponent } from '../ng-control/ng-control.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Theme } from '../../services/theme.service';
import {BehaviorSubject} from 'rxjs';

type InputStyle = 'classic' | 'win98' | 'vista' | 'metal';

@Component({
  selector: 'app-input',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  imports: [
    NgClass,
    AsyncPipe
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', './themes/input.themes.scss']
})
export class InputComponent extends NgControlComponent {
  @Input()
  get alt(): string {
    return this._alt;
  }
  set alt(val: string) {
    this._alt = val;
  }
  private _alt: string = '';

  @Input()
  get autocapitalize(): string {
    return this._autocapitalize;
  }
  set autocapitalize(val: string) {
    this._autocapitalize = val;
  }
  private _autocapitalize: string = 'off';

  @Input()
  get autocomplete(): boolean {
    return this._autocomplete;
  }
  set autocomplete(val: boolean) {
    this._autocomplete = val;
  }
  private _autocomplete: boolean = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(val: boolean) {
    this._disabled = val;
  }
  private _disabled: boolean = false;

  @Input()
  get max(): number {
    return this._max;
  }
  set max(val: number) {
    this._max = val;
  }
  private _max: number;

  @Input()
  get maxlength(): number {
    return this._maxlength;
  }
  set maxlength(val: number) {
    this._maxlength = val;
  }
  private _maxlength: number;

  @Input()
  get min(): number {
    return this._min;
  }
  set min(val: number) {
    this._min = val;
  }
  private _min: number;

  @Input()
  get minlength(): number {
    return this._minlength;
  }
  set minlength(val: number) {
    this._minlength = val;
  }
  private _minlength: number;
  @Input()
  get name(): string {
    return this._name;
  }
  set name(val: string) {
    this._name = val;
  }
  private _name: string = '';

  @Input()
  get pattern(): string {
    return this._pattern;
  }
  set pattern(val: string) {
    this._pattern = val;
  }
  private _pattern: string = '';

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(val: string) {
    this._placeholder = val;
  }
  private _placeholder: string = '';

  @Input()
  get readonly(): boolean {
    return this._readonly;
  }
  set readonly(val: boolean) {
    this._readonly = val;
  }
  private _readonly: boolean = false;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(val: boolean) {
    this._required = val;
  }
  private _required: boolean = false;

  @Input()
  get type(): string {
    return this._type;
  }
  set type(val: string) {
    this._type = val;
  }
  private _type: string;

  @Input()
  get label(): string {
    return this._label;
  }
  set label(val: string) {
    this._label = val;
  }
  private _label: string;

  @Input()
  get id(): string {
    return this._id;
  }
  set id(val: string) {
    this._id = val;
  }
  private _id: string;

  onInput(event: Event) {
    this.setValue( (event.target as HTMLInputElement).value);
  }
}
