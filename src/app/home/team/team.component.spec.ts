import { TestBed } from '@angular/core/testing';
import { TeamCompoennt } from './team.component';

describe('TeamCompoennt', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TeamCompoennt]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(TeamCompoennt);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have initial values', () => {
    const fixture = TestBed.createComponent(TeamCompoennt);
    const component = fixture.componentInstance;
    expect(component.people.length).not.toEqual(0)
  });
})