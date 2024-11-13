import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { RadioComponent } from '../../components/checkbox-radio/radio/radio.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    ButtonComponent,
    RadioComponent
  ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {

  protected readonly componentList = [
    'button',
    'checkbox',
    'expansion',
    'input',
    'radio',
    'select'
  ];

  protected readonly themesList = [
    'standard',
    'metal'
  ]
}
