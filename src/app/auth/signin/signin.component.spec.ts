import { TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { NgForm } from '@angular/forms';

describe('SigninComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SigninComponent],
    declarations: []
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have initial values', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const component = fixture.componentInstance;
    expect(component.authError).toBeNull()
  });

  it('When empty form submited, authError should occur', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const component = fixture.componentInstance;
    component.handleSubmit({ value: {} } as NgForm)
    expect(component.authError).toContain('valid email or password')
  })
})