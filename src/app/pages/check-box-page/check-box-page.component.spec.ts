import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxPageComponent } from './check-box-page.component';

describe('CheckBoxPageComponent', () => {
  let component: CheckBoxPageComponent;
  let fixture: ComponentFixture<CheckBoxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckBoxPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
