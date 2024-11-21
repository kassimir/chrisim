import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, AsyncPipe } from '@angular/common';
import { SelectComponent } from '../../components/select/select.component';
import {PageComponent} from '../pages.component';

@Component({
  selector: 'app-select-page',
  standalone: true,
  imports: [FormsModule, NgClass, AsyncPipe, SelectComponent],
  templateUrl: './select-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class SelectPageComponent extends PageComponent {
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
