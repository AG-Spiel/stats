import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBoardComponent } from './market-board.component';

describe('MarketBoardComponent', () => {
  let component: MarketBoardComponent;
  let fixture: ComponentFixture<MarketBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
