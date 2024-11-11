import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgControlComponent } from './ng-control.component';

describe('NgControlComponent', () => {
  let component: NgControlComponent;
  let fixture: ComponentFixture<NgControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
