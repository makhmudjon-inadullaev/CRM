import { TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

describe('AuthComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule],
    declarations: [AuthComponent]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
})