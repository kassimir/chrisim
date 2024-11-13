import {Component, ViewEncapsulation} from '@angular/core';
import {AsyncPipe, NgClass} from '@angular/common';
import {NgControlComponent} from '../ng-control/ng-control.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', './themes/themes.scss']
})
export class ButtonComponent extends NgControlComponent {}
