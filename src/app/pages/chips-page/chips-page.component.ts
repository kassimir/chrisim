import { Component } from '@angular/core';

import { ChipComponent } from '../../components/chips/chip.component';

@Component({
  selector: 'app-chips-page',
  standalone: true,
  imports: [ChipComponent],
  templateUrl: './chips-page.component.html',
  styleUrls: ['../pages.main.scss', './chips-page.component.scss']
})
export class ChipsPageComponent {
  protected chips = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  protected selectedChip = 1;
}
