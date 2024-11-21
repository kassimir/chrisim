import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, AsyncPipe } from '@angular/common';

import { InputComponent } from '../../components/input/input.component';
import {PageComponent} from '../pages.component';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [FormsModule, NgClass, AsyncPipe, InputComponent],
  templateUrl: './input-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class InputPageComponent extends PageComponent {
  protected input = 'Chris Stanley';
}
