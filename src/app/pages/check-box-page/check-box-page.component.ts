import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../components/checkbox-radio/checkbox/checkbox.component';

@Component({
  selector: 'app-check-box-page',
  standalone: true,
  imports: [FormsModule, CheckboxComponent],
  templateUrl: './check-box-page.component.html',
  styleUrls: ['../pages.main.scss', './check-box-page.component.scss']
})
export class CheckboxPageComponent {
  protected checkboxes = [false, false, true, false];
}
