import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [FormsModule, InputComponent],
  templateUrl: './input-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class InputPageComponent {
  protected input = 'Chris Stanley';
}
