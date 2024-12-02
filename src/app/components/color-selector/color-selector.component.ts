import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorSelectorService } from '../color-selector.service';

@Component({
  selector: 'app-color-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  private _color: string = '#000000';

  protected set color(val: string) {
    this._color = val;
    if (val) {
      ColorSelectorService.bgColor.next(val);

      const rgb = this.hexToRgb(val);
      if (rgb) {
        const brightness = (rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114);
        console.log(brightness)
        const fontColor = brightness > 105 ? 'black' : 'white';
        ColorSelectorService.fontColor.next(fontColor);
      }
    }
  }

  protected get color(): string {
    return this._color;
  }

  private hexToRgb(hex: string): number[] | null {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  constructor() {
    this.color = '#000000'
  }
}
