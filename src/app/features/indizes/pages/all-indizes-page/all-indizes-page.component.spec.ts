import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIndizesPageComponent } from './all-indizes-page.component';

describe('AllIndizesPageComponent', () => {
  let component: AllIndizesPageComponent;
  let fixture: ComponentFixture<AllIndizesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllIndizesPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIndizesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
