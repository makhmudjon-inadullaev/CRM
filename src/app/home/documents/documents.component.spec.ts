import { TestBed } from '@angular/core/testing';
import { DocumentsComponent } from './documents.component';

describe('DocumentsComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [DocumentsComponent]
  }));

  it('Component should be created', () => {
    const fixture = TestBed.createComponent(DocumentsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Component should have h2 title element', () => {
    const fixture = TestBed.createComponent(DocumentsComponent);
    const component = fixture.nativeElement;
    const h2 = component.querySelector('.mt-2.text-base.font-semibold.leading-6.text-gray-900')!;
    expect(h2.textContent).toContain('Add team members to your documents');
  });
})