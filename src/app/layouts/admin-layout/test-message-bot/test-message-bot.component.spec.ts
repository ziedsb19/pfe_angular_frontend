import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMessageBotComponent } from './test-message-bot.component';

describe('TestMessageBotComponent', () => {
  let component: TestMessageBotComponent;
  let fixture: ComponentFixture<TestMessageBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMessageBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMessageBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
