import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSharesPageComponent } from './all-shares-page.component';

describe('AllSharesPageComponent', () => {
  let component: AllSharesPageComponent;
  let fixture: ComponentFixture<AllSharesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllSharesPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSharesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
