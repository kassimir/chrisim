import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, AsyncPipe } from '@angular/common';

import { RadioComponent } from '../../components/checkbox-radio/radio/radio.component';
import {PageComponent} from '../pages.component';

@Component({
  selector: 'app-radio-page',
  standalone: true,
  imports: [FormsModule, NgClass, AsyncPipe, RadioComponent],
  templateUrl: './radio-page.component.html',
  styleUrls: ['../pages.main.scss', './radio-page.component.scss']
})
export class RadioPageComponent extends PageComponent {
  protected radios = ['Option 0', 'Option 1', 'Option 2', 'Option 3'];
  protected selectedRadio = 'Option 0';
}
