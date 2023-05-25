import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('CalendarComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [DashboardComponent]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have initial values', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const component = fixture.componentInstance;
    expect(component.clients.length).not.toEqual(0)
  });
})