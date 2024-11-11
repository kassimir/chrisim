import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { RadioComponent } from './components/checkbox-radio/radio/radio.component';
import { CheckboxComponent } from './components/checkbox-radio/checkbox/checkbox.component';
import { SelectComponent } from './components/select/select.component';
import { OptionComponent } from './components/select/option/option.component';
import { ButtonComponent } from './components/button/button.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import {Theme, ThemeService} from './services/theme.service';
import {BehaviorSubject} from 'rxjs';
import {AsyncPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    FormsModule,
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    SelectComponent,
    OptionComponent,
    ButtonComponent,
    ExpansionPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected theme: BehaviorSubject<Theme> = ThemeService.theme;
  protected themeOptions = ['standard', 'metal'];
  protected set selectedTheme(val: Theme) {
    this._selectedTheme = val;
    this.selectTheme(val);
  }
  protected get selectedTheme(): Theme {
    return this._selectedTheme;
  }
  private _selectedTheme: Theme = 'standard';

  protected inputValue = 'Chris';
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
  protected checkboxes = [false, false, true, false];
  protected radios = ['Option 0', 'Option 1', 'Option 2', 'Option 3'];
  protected selectedRadio = 'Option 0';

  constructor() {
    ThemeService.theme.next('standard');
  }

  protected selectTheme(theme: Theme) {
    ThemeService.theme.next(theme);
  }
}
