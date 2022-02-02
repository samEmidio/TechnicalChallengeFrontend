import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResumeComponent } from './event-resume.component';

describe('EventResumeComponent', () => {
  let component: EventResumeComponent;
  let fixture: ComponentFixture<EventResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
