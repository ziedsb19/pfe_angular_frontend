import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlistconvComponent } from './chatlistconv.component';

describe('ChatlistconvComponent', () => {
  let component: ChatlistconvComponent;
  let fixture: ComponentFixture<ChatlistconvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatlistconvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatlistconvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
