import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWrapperComponent } from './page-wrapper.component';

describe('PageWrapperComponent', () => {
  let component: PageWrapperComponent;
  let fixture: ComponentFixture<PageWrapperComponent>;

  const testTitle = 'testTitle';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWrapperComponent);
    component = fixture.componentInstance;
    component.heading = testTitle;
    component.subheading = testTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component', () => {
    const pageDe: DebugElement = fixture.debugElement;
    const pageEl: HTMLElement = pageDe.nativeElement;
    const page = pageEl.querySelector('.main');
    expect(page).toBeDefined();
  });

  it('should render component with title', () => {
    const pageDe: DebugElement = fixture.debugElement;
    const pageEl: HTMLElement = pageDe.nativeElement;
    const heading = pageEl.querySelector('app-page-heading');
    expect(heading?.textContent).toContain(testTitle);
  });

  it('should render component with subheading', () => {
    const pageDe: DebugElement = fixture.debugElement;
    const pageEl: HTMLElement = pageDe.nativeElement;
    const subheading = pageEl.querySelector('app-page-subheading');
    expect(subheading?.textContent).toContain(testTitle);
  });
});
