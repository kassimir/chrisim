import { Component } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';
import {NgControlComponent} from '../ng-control/ng-control.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', './themes/themes.scss']
})
export class ButtonComponent extends NgControlComponent {}
