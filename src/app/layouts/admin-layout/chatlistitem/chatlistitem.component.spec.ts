import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlistitemComponent } from './chatlistitem.component';

describe('ChatlistitemComponent', () => {
  let component: ChatlistitemComponent;
  let fixture: ComponentFixture<ChatlistitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatlistitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
