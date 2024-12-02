import { TestBed } from '@angular/core/testing';

import { ColorSelectorService } from './color-selector.service';

describe('ColorSelectorService', () => {
  let service: ColorSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
