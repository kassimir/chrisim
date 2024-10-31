import {Component, ContentChildren, Input, QueryList} from '@angular/core';
import {NgIf} from '@angular/common';

type Option = {
  text: string;
  value: any;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgIf],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
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
  protected showDropDown: boolean = false;
  protected selectDisplay: string = 'Option 1'
  protected selectedIndex: number = 0;
  protected selectedOptions: boolean[] = [];

  protected highlight(index: number) {
    this.selectedOptions = this.selectedOptions.map( (_, i) => i === this.selectedIndex || i === index);
  }

  protected unhighlight(index: number) {
    if (index !== this.selectedIndex) this.selectedOptions[index] = false;
  }

  protected selectItem(index: number, text: string) {
    this.selectedIndex = index;
    this.highlight(index);
    this.selectDisplay = text;
  }
}
