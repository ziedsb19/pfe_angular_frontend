import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentDashboardComponent } from './intent-dashboard.component';

describe('IntentDashboardComponent', () => {
  let component: IntentDashboardComponent;
  let fixture: ComponentFixture<IntentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
