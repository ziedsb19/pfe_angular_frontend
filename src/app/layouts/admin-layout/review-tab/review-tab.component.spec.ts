import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTabComponent } from './review-tab.component';

describe('ReviewTabComponent', () => {
  let component: ReviewTabComponent;
  let fixture: ComponentFixture<ReviewTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
