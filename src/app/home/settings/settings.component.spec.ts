import { TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';

describe('DocumentsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [SettingsComponent]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have h2 title element', () => {
    const fixture = TestBed.createComponent(SettingsComponent);
    const component = fixture.nativeElement;
    const h2 = component.querySelector('.text-base.font-semibold.leading-7.text-gray-900')!;
    expect(h2.textContent).toContain('Profile');
  });
})