import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelPageComponent } from './expansion-panel-page.component';

describe('ExpansionPanelPageComponent', () => {
  let component: ExpansionPanelPageComponent;
  let fixture: ComponentFixture<ExpansionPanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionPanelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
