import { TestBed } from '@angular/core/testing';
import { ReportsComponent } from './reports.component';

describe('CalendarComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReportsComponent]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(ReportsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have initial values', () => {
    const fixture = TestBed.createComponent(ReportsComponent);
    const component = fixture.componentInstance;
    expect(component.projects.length).not.toEqual(0)
    expect(component.users.length).not.toEqual(0)
  });
})