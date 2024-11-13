import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from '../../components/checkbox-radio/radio/radio.component';

@Component({
  selector: 'app-radio-page',
  standalone: true,
  imports: [FormsModule, RadioComponent],
  templateUrl: './radio-page.component.html',
  styleUrls: ['../pages.main.scss', './radio-page.component.scss']
})
export class RadioPageComponent {
  protected radios = ['Option 0', 'Option 1', 'Option 2', 'Option 3'];
  protected selectedRadio = 'Option 0';
}
