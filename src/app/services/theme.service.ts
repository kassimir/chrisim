import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'standard' | 'metal';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public static theme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('standard');
}
