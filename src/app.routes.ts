import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './app/pages/home/home.component';
import { ComponentsComponent } from './app/pages/components/components.component';
import { ButtonPageComponent } from './app/pages/button-page/button-page.component';
import { CheckboxPageComponent } from './app/pages/check-box-page/check-box-page.component';
import { ExpansionPanelPageComponent } from './app/pages/expansion-panel-page/expansion-panel-page.component';
import { InputPageComponent } from './app/pages/input-page/input-page.component';
import { RadioPageComponent } from './app/pages/radio-page/radio-page.component';
import { SelectPageComponent } from './app/pages/select-page/select-page.component';
import { ChipsPageComponent } from './app/pages/chips-page/chips-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components', component: ComponentsComponent,
    children: [
      { path: 'button', component: ButtonPageComponent, outlet: 'components' },
      { path: 'checkbox', component: CheckboxPageComponent, outlet: 'components' },
      { path: 'chips', component: ChipsPageComponent, outlet: 'components'},
      { path: 'expansion', component: ExpansionPanelPageComponent, outlet: 'components' },
      { path: 'input', component: InputPageComponent, outlet: 'components' },
      { path: 'radio', component: RadioPageComponent, outlet: 'components' },
      { path: 'select', component: SelectPageComponent, outlet: 'components' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
