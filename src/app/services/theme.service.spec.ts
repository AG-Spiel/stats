import { TestBed } from '@angular/core/testing';
import { StyleManagerService } from './style-manager.service';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  let mockStyleManagerService: jasmine.SpyObj<StyleManagerService>;

  beforeEach(() => {
    mockStyleManagerService = jasmine.createSpyObj('StyleManagerService', [
      'setStyle',
    ]);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: StyleManagerService,
          useValue: mockStyleManagerService,
        },
      ],
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all available themes', () => {
    const resThemes = service.getThemeOptions();
    expect(resThemes.length).toBe(4);
    expect(resThemes[0].value).toBeDefined();
    expect(resThemes[0].label).toBeDefined();
    expect(resThemes[0].headingColor).toBeDefined();
    expect(resThemes[0].buttonColor).toBeDefined();
    expect(resThemes[0].backgroundColor).toBeDefined();
  });

  it('should set theme with style manager service', () => {
    const themeName = 'testTheme';
    service.setTheme(themeName);
    expect(mockStyleManagerService.setStyle).toHaveBeenCalledWith(
      'theme',
      `assets/${themeName}.css`
    );
  });
});
