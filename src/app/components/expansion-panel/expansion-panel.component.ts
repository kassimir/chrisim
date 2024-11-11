import { Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgControlComponent } from '../ng-control/ng-control.component';
import { NgClass, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ExpansionPanelComponent),
      multi: true
    }
  ],
  imports: [NgClass, AsyncPipe],
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss', 'themes/themes.scss']
})
export class ExpansionPanelComponent extends NgControlComponent {
  @Input() header: string = '';
  @Input() expand: boolean = false;
}
