import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'frutiger' | 'metal' | 'neon' | 'standard';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public static theme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('standard');
}
