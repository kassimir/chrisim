import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgControlComponent} from '../../ng-control/ng-control.component';
import {AsyncPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  imports: [NgClass, AsyncPipe],
  templateUrl: './checkbox.component.html',
  styleUrls: ['../cr.base.component.scss', './checkbox.component.scss', '../themes/themes.scss']
})
export class CheckboxComponent extends NgControlComponent {
  @Input() label: string = '';
  onInput(event: Event) {
    this.setValue( (event.target as HTMLInputElement).checked );
  }
}
