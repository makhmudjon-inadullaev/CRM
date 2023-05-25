import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule],
    declarations: [AppComponent]
  }));

  it('App should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
})