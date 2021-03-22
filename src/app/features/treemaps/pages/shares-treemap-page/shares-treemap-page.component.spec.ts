import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesTreemapPageComponent } from './shares-treemap-page.component';

describe('SharesTreemapPageComponent', () => {
  let component: SharesTreemapPageComponent;
  let fixture: ComponentFixture<SharesTreemapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharesTreemapPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesTreemapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.url).toBeDefined();
    expect(component.sharesTreemapConfig).toBeDefined();
    expect(component.sharesTreemapConfig.length).toBeGreaterThan(0);
  });
});
