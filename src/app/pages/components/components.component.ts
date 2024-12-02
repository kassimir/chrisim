import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RadioComponent } from '../../components/checkbox-radio/radio/radio.component';
import { ChipComponent } from '../../components/chips/chip.component';
import { Theme, ThemeService } from '../../services/theme.service';
import {ColorSelectorComponent} from '../../components/color-selector/color-selector.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterOutlet,
    ChipComponent,
    RadioComponent,
    ColorSelectorComponent
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent implements OnInit {

  protected readonly route: ActivatedRoute = inject(ActivatedRoute);

  protected set selectedTheme(val: Theme) {
    this._selectedTheme = val;
    ThemeService.theme.next(val);
  }
  protected get selectedTheme(): Theme {
    return this._selectedTheme;
  }
  private _selectedTheme: Theme = 'standard';

  protected readonly componentList = [
    'button',
    'checkbox',
    'chips',
    'expansion',
    'input',
    'radio',
    'select'
  ];

  protected readonly themesList = [
    'frutiger',
    'metal',
    'neon',
    'standard'
  ]

  protected selectedChip = -1;

  ngOnInit(): void {
    this.route.children[0]?.url
      .subscribe((segments) => {
          this.selectedChip = this.componentList.findIndex( c => c === segments.join('/'))
        });
  }

}
