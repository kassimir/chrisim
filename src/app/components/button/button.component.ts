import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AsyncPipe, NgClass} from '@angular/common';
import {NgControlComponent} from '../ng-control/ng-control.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', './themes/button.themes.scss']
})
export class ButtonComponent extends NgControlComponent {
  @Input()
  protected set id(val: string) {
    this._id = val;
  }
  protected get id(): string {
    return this._id;
  }
  private _id: string = '';
}
