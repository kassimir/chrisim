import { Component, forwardRef, Input } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class RadioComponent extends InputComponent {

  override onInput(event: Event) {
    this.setValue((event.target as HTMLInputElement).value);
  }
}
