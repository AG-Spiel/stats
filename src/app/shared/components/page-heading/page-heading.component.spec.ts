import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadingComponent } from './page-heading.component';

describe('PageHeadingComponent', () => {
  let component: PageHeadingComponent;
  let fixture: ComponentFixture<PageHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageHeadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component', () => {
    const headerDe: DebugElement = fixture.debugElement;
    const headerEl: HTMLElement = headerDe.nativeElement;
    const header = headerEl.querySelector('.mat-display-1');
    expect(header).toBeDefined();
  });
});
