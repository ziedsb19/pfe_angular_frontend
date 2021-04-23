import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatstarComponent } from './chatstar.component';

describe('ChatstarComponent', () => {
  let component: ChatstarComponent;
  let fixture: ComponentFixture<ChatstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatstarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
