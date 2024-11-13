import { Component } from '@angular/core';

import { ExpansionPanelComponent } from '../../components/expansion-panel/expansion-panel.component';

@Component({
  selector: 'app-expansion-panel-page',
  standalone: true,
  imports: [ExpansionPanelComponent],
  templateUrl: './expansion-panel-page.component.html',
  styleUrl: '../pages.main.scss'
})
export class ExpansionPanelPageComponent {}
