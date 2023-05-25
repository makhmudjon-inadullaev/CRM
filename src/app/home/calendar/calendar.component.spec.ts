import { TestBed } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CalendarComponent]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have initial values', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const component = fixture.componentInstance;
    expect(component.meetings.length).not.toEqual(0)
  });
})