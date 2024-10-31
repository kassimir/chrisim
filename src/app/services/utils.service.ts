import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class UtilsService {

  public static convertToBoolean(val: string | number | boolean | null | undefined) {
    return val === ' ' || val === 'true' || val === true;
  }
}
