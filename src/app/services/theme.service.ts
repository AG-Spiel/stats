import { Injectable } from '@angular/core';
import { THEMES } from '../constants/themes.constants';
import { StyleManagerService } from './style-manager.service';

export interface Option {
  backgroundColor: string;
  buttonColor: string;
  headingColor: string;
  label: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private readonly styleManagerService: StyleManagerService) {}

  getThemeOptions(): Option[] {
    return THEMES;
  }

  setTheme(themeToSet: string): void {
    this.styleManagerService.setStyle('theme', `assets/${themeToSet}.css`);
  }
}
