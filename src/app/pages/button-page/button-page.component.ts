import { Component } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';

import { ButtonComponent } from '../../components/button/button.component';
import  { PageComponent } from '../pages.component';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [NgClass, AsyncPipe, ButtonComponent],
  templateUrl: './button-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class ButtonPageComponent extends PageComponent {}
