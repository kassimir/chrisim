import { Component, forwardRef, Input } from '@angular/core';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { NgControlComponent } from '../ng-control/ng-control.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type Option = {
  text: string;
  value: any;
}

@Component({
  selector: 'app-select',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  imports: [NgIf, NgClass, AsyncPipe],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss', './themes/themes.scss']
})
export class SelectComponent extends NgControlComponent {
  @Input()
  set options(val: Option[]) {
    this._options = val.map( (v: Option, i: number) => {
      this.selectedOptions.push(i === this.selectedIndex);
      return v;
    });
  }
  get options(): Option[] {
    return this._options;
  }
  protected _options: Option[]

  @Input() default = 'Select Option';

  protected set selectedIndex(val: number) {
    this.highlight(val);
    this._selectedIndex = val;
  }
  protected get selectedIndex(): number {
    return this._selectedIndex;
  }
  private _selectedIndex: number = -1;

  protected showDropDown: boolean = false;
  protected selectDisplay: string = 'Option 1'
  protected hoverContainer = false;
  protected selectedOptions: boolean[] = [];

  protected highlight(index: number) {
    this.selectedOptions = this.selectedOptions.map( (_, i) => i === this.selectedIndex || i === index);
  }

  protected unhighlight(index: number) {
    if (index !== this.selectedIndex) this.selectedOptions[index] = false;
  }

  protected containerEnter() {
    this.hoverContainer = true;
  }

  protected containerLeave() {
    this.hoverContainer = false;
  }

  protected selectItem(index: number, text: string, value: any) {
    this.selectedIndex = index;
    this.highlight(index);
    this.selectDisplay = text;
    this.hoverContainer = false;
    this.setValue(value);
  }

  override writeValue(value: any) {
    this.setIndexAndText(value);
    super.writeValue(value);
  }

  override setValue(value: any) {
    this.setIndexAndText(value);
    super.setValue(value);
  }

  private setIndexAndText(value: any) {
    this.selectedIndex = this.options.findIndex( option => {
      if (option.value === value) {
        this.selectDisplay = option.text;
        return true;
      } else {
        return false;
      }
    });
  }
}
