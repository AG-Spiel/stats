import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTreemapPageComponent } from './index-treemap-page.component';

describe('IndexTreemapPageComponent', () => {
  let component: IndexTreemapPageComponent;
  let fixture: ComponentFixture<IndexTreemapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexTreemapPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTreemapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load url and treemapConfig', () => {
    expect(component).toBeTruthy();
    expect(component.url).toBeDefined();
    expect(component.treeMapConfig).toBeDefined();
    expect(component.treeMapConfig.length).toBeGreaterThan(0);
  });
});
