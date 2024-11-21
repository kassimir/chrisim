import { Component } from '@angular/core';
import { Theme, ThemeService } from '../services/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    standalone: true,
    imports: [],
    template: ''
})
export class PageComponent {
    protected theme: BehaviorSubject<Theme> = ThemeService.theme;
}