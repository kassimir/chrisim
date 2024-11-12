import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { ComponentsComponent } from './app/pages/components/components.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components', component: ComponentsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
