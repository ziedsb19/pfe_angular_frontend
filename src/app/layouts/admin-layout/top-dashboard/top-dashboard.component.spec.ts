import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDashboardComponent } from './top-dashboard.component';

describe('TopDashboardComponent', () => {
  let component: TopDashboardComponent;
  let fixture: ComponentFixture<TopDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
