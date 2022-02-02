import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResumeCreateComponent } from './event-resume-create.component';

describe('EventResumeCreateComponent', () => {
  let component: EventResumeCreateComponent;
  let fixture: ComponentFixture<EventResumeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResumeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResumeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
