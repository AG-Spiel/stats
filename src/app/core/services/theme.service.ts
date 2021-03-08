import { Injectable } from '@angular/core';
import { STATE_THEME_KEY } from '../constants/states.constants';
import { DEFAULT_THEME, THEMES } from '../constants/themes.constants';
import { LocalStorageService } from './local-storage.service';
import { StyleManagerService } from './style-manager.service';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';

export interface IThemeOption {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
  isDark: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(
    private readonly styleManagerService: StyleManagerService,
    private readonly storageService: LocalStorageService
  ) {}

  private parseThemeFromArray(
    themeValue: string | null
  ): IThemeOption | undefined {
    if (themeValue === null) {
      return undefined;
    }
    return THEMES.find((theme) => {
      return theme.value === themeValue;
    });
  }

  private chooseChartThemeOnBrightness(isDark: boolean | undefined): void {
    if (isDark !== undefined && !!isDark) {
      am4core.useTheme(am4themes_dark);
    } else {
      am4core.useTheme(am4themes_animated);
    }
  }

  getThemeOptions(): IThemeOption[] {
    return THEMES;
  }

  getTheme(): string | null {
    return this.storageService.getItem(STATE_THEME_KEY);
  }

  getThemeObj(): IThemeOption | undefined {
    const themeValue = this.getTheme();
    if (themeValue !== null) {
      return this.parseThemeFromArray(themeValue);
    } else {
      return undefined;
    }
  }

  setTheme(themeToSet: string): void {
    this.styleManagerService.setStyle('theme', `assets/${themeToSet}.css`);
  }

  setDefaultTheme(): void {
    this.styleManagerService.setStyle('theme', `assets/${DEFAULT_THEME}.css`);
    this.setChartTheme(DEFAULT_THEME);
  }

  setChartTheme(themeToSet: string | null): void {
    const isDark = this.parseThemeFromArray(themeToSet)?.isDark;
    this.chooseChartThemeOnBrightness(isDark);
  }
}
