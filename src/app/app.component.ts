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
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    RouterOutlet,
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

  constructor() {
    ThemeService.theme.next('standard');
  }

  protected selectTheme(theme: Theme) {
    ThemeService.theme.next(theme);
  }
}
