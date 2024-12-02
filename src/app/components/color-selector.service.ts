import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorSelectorService {
  public static bgColor: BehaviorSubject<string> = new BehaviorSubject<string>('#000000');
  public static fontColor: BehaviorSubject<string> = new BehaviorSubject<string>('white');
}
