import { Injectable } from '@angular/core';
import { THEMES } from '../constants/themes.constants';
import { StyleManagerService } from './style-manager.service';

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
  constructor(private readonly styleManagerService: StyleManagerService) {}

  getThemeOptions(): IThemeOption[] {
    return THEMES;
  }

  setTheme(themeToSet: string): void {
    this.styleManagerService.setStyle('theme', `assets/${themeToSet}.css`);
  }
}
