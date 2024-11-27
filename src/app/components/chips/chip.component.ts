import {Component, Input} from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';
import { NgControlComponent } from '../ng-control/ng-control.component';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss', './themes/chips.themes.scss']
})
export class ChipComponent extends NgControlComponent {
  @Input() selected: boolean = false;
}
