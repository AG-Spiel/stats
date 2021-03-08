import { TestBed } from '@angular/core/testing';
import { DEFAULT_THEME } from '../constants/themes.constants';
import { LocalStorageService } from './local-storage.service';
import { StyleManagerService } from './style-manager.service';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  let mockStyleManagerService: jasmine.SpyObj<StyleManagerService>;
  let mockStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    mockStyleManagerService = jasmine.createSpyObj('StyleManagerService', [
      'setStyle',
    ]);
    mockStorageService = jasmine.createSpyObj('StorageService', ['getItem']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: StyleManagerService,
          useValue: mockStyleManagerService,
        },
        {
          provide: LocalStorageService,
          useValue: mockStorageService,
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

  it('should set default themes on chart and website', () => {
    const setChartSpy = spyOn(service, 'setChartTheme');

    service.setDefaultTheme();

    expect(mockStyleManagerService.setStyle).toHaveBeenCalledWith(
      'theme',
      `assets/${DEFAULT_THEME}.css`
    );
    expect(setChartSpy).toHaveBeenCalledWith(DEFAULT_THEME);
  });

  it('should get theme from storage', () => {
    const resTheme = 'test';
    mockStorageService.getItem.and.returnValue(resTheme);

    const res = service.getTheme();

    expect(res).toBe(resTheme);
  });

  it('should get theme object from storage', () => {
    const testTheme = 'deeppurple-amber';
    const getThemeSpy = spyOn(service, 'getTheme').and.returnValue(testTheme);

    const res = service.getThemeObj();

    expect(getThemeSpy).toHaveBeenCalled();
    expect(res?.value).toBe(testTheme);
  });

  it('should get undefined theme if local storage empty', () => {
    const testTheme = null;
    const getThemeSpy = spyOn(service, 'getTheme').and.returnValue(testTheme);

    const res = service.getThemeObj();

    expect(getThemeSpy).toHaveBeenCalled();
    expect(res).not.toBeDefined();
  });

  it('should set bright chart theme', () => {
    const testTheme = 'deeppurple-amber';

    service.setChartTheme(testTheme);
  });

  it('should set dark chart theme', () => {
    const testTheme = 'pink-bluegrey';

    service.setChartTheme(testTheme);
  });
});
