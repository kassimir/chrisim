import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-select-page',
  standalone: true,
  imports: [FormsModule, SelectComponent],
  templateUrl: './select-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class SelectPageComponent {
  protected selectValue = 4;
  protected options = [
    {
      text: 'Option 1',
      value: 1
    },
    {
      text: 'Option 2',
      value: 2
    },
    {
      text: 'Option 3',
      value: 3
    },
    {
      text: 'Option 4',
      value: 4
    },
    {
      text: 'Option 5',
      value: 5
    }
  ]
}
