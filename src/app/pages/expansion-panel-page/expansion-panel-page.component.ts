import { Component } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';

import { ExpansionPanelComponent } from '../../components/expansion-panel/expansion-panel.component';
import {PageComponent} from '../pages.component';

@Component({
  selector: 'app-expansion-panel-page',
  standalone: true,
  imports: [ NgClass, AsyncPipe, ExpansionPanelComponent ],
  templateUrl: './expansion-panel-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class ExpansionPanelPageComponent extends PageComponent {}
