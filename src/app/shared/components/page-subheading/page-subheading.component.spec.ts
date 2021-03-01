import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubheadingComponent } from './page-subheading.component';

describe('SubheadingComponent', () => {
  let component: PageSubheadingComponent;
  let fixture: ComponentFixture<PageSubheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageSubheadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSubheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component', () => {
    const subheadingDebug: DebugElement = fixture.debugElement;
    const subheadingElement: HTMLElement = subheadingDebug.nativeElement;
    const subheading = subheadingElement.querySelector('.mat-h2');
    expect(subheading).toBeDefined();
  });
});
