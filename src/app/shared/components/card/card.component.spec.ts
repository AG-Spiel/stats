import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const testTitle = 'testTitle';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.title = testTitle;
    component.subtitle = testTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render component', () => {
    const cardDe: DebugElement = fixture.debugElement;
    const cardEl: HTMLElement = cardDe.nativeElement;
    const card = cardEl.querySelector('.mat-elevation-z4');
    expect(card).toBeDefined();
  });

  it('should render card with title', () => {
    const cardDe: DebugElement = fixture.debugElement;
    const cardEl: HTMLElement = cardDe.nativeElement;
    const card = cardEl.querySelector('mat-card-title');
    expect(card?.textContent).toContain(testTitle);
  });

  it('should render card with subtitle', () => {
    const cardDe: DebugElement = fixture.debugElement;
    const cardEl: HTMLElement = cardDe.nativeElement;
    const card = cardEl.querySelector('mat-card-subtitle');
    expect(card?.textContent).toContain(testTitle);
  });
});
