import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, AsyncPipe } from '@angular/common';

import { CheckboxComponent } from '../../components/checkbox-radio/checkbox/checkbox.component';
import {PageComponent} from '../pages.component';

@Component({
  selector: 'app-check-box-page',
  standalone: true,
  imports: [ FormsModule, NgClass, AsyncPipe, CheckboxComponent ],
  templateUrl: './check-box-page.component.html',
  styleUrls: ['../pages.main.scss', './check-box-page.component.scss']
})
export class CheckboxPageComponent extends PageComponent {
  protected checkboxes = [false, false, true, false];
}
