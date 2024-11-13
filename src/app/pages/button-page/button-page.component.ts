import { Component } from '@angular/core';

import { ButtonComponent } from '../../components/button/button.component';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [ButtonComponent, CodeBlockComponent],
  templateUrl: './button-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class ButtonPageComponent {}
