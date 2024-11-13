import { Component } from '@angular/core';

import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './button-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class ButtonPageComponent {}
