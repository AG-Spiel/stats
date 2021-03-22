import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectChange } from '@angular/material/select';
import { ThemeService } from 'src/app/core/services/theme.service';

import { TreemapComponent } from './treemap.component';

describe('TreemapComponent', () => {
  let component: TreemapComponent;
  let fixture: ComponentFixture<TreemapComponent>;

  let mockThemeService: jasmine.SpyObj<ThemeService>;

  const dummyConfig = [
    {
      text: 'Buchwert',
      value: 'buchwert',
      name: 'ag',
    },
  ];
  const dummyUrl = 'localhost';

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj('ThemeService', ['getThemeObj']);
    await TestBed.configureTestingModule({
      declarations: [TreemapComponent],
    }).compileComponents();

    mockThemeService.getThemeObj.and.returnValue({
      backgroundColor: '#fff',
      buttonColor: '#fff',
      headingColor: '#fff',
      isDark: true,
      value: 'Test-Theme',
      label: 'Test-Theme',
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreemapComponent);
    component = fixture.componentInstance;
    component.config = dummyConfig;
    component.url = dummyUrl;
    fixture.detectChanges();
  });

  it('should create and set selected and title', () => {
    expect(component).toBeTruthy();
    expect(component.selected).toBe(dummyConfig[0].value);
    expect(component.title).toBe(dummyConfig[0].text);
  });

  it('should change Selection', () => {
    const mockSelectEvent: jasmine.SpyObj<MatSelectChange> = jasmine.createSpyObj(
      'MatSelectChange',
      ['']
    );
    mockSelectEvent.value = 'buchwert';
    component.changeSelection(mockSelectEvent);
  });

  it('should throw exception if change target is unknown', () => {
    const mockSelectEvent: jasmine.SpyObj<MatSelectChange> = jasmine.createSpyObj(
      'MatSelectChange',
      ['']
    );
    const value = 'non-existing-value';
    mockSelectEvent.value = value;
    expect((): void => {
      component.changeSelection(mockSelectEvent);
    }).toThrow(new Error(`No valid option found with value ${value}`));
  });
});
