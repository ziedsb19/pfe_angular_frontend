import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentTabComponent } from './intent-tab.component';

describe('IntentTabComponent', () => {
  let component: IntentTabComponent;
  let fixture: ComponentFixture<IntentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
