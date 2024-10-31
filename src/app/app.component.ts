import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import {RadioComponent} from './components/radio/radio.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {SelectComponent} from './components/select/select.component';
import {OptionComponent} from './components/select/option/option.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, RadioComponent, CheckboxComponent, SelectComponent, OptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
