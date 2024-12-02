import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorSelectorService {
  public static bgColor: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public static fontColor: BehaviorSubject<string> = new BehaviorSubject<string>('white');
}
