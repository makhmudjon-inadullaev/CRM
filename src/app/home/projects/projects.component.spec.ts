import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('DocumentsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ProjectsComponent]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have h2 title element', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.nativeElement;
    const h2 = component.querySelector('.text-base.font-semibold.leading-6.text-gray-900')!;
    expect(h2.textContent).toContain('Projects');
  });
})