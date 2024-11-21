import { Component } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';

import { ChipComponent } from '../../components/chips/chip.component';
import {PageComponent} from '../pages.component';

@Component({
  selector: 'app-chips-page',
  standalone: true,
  imports: [NgClass, AsyncPipe, ChipComponent],
  templateUrl: './chips-page.component.html',
  styleUrls: ['../pages.main.scss', './chips-page.component.scss']
})
export class ChipsPageComponent extends PageComponent {
  protected chips = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  protected selectedChip = 1;
}
