import { IThemeOption } from '../services/theme.service';

export const DEFAULT_THEME = 'pink-bluegrey';

export const VALID_THEMES_TYPES = [
  'deeppurple-amber',
  'indigo-pink',
  'pink-bluegrey',
  'purple-green',
];

export const THEMES: IThemeOption[] = [
  {
    backgroundColor: '#fff',
    buttonColor: '#ffc107',
    headingColor: '#673ab7',
    label: 'Deep Purple & Amber',
    value: 'deeppurple-amber',
    isDark: false,
  },
  {
    backgroundColor: '#fff',
    buttonColor: '#ff4081',
    headingColor: '#3f51b5',
    label: 'Indigo & Pink',
    value: 'indigo-pink',
    isDark: false,
  },
  {
    backgroundColor: '#303030',
    buttonColor: '#607d8b',
    headingColor: '#e91e63',
    label: 'Pink & Blue Grey',
    value: 'pink-bluegrey',
    isDark: true,
  },
  {
    backgroundColor: '#303030',
    buttonColor: '#4caf50',
    headingColor: '#9c27b0',
    label: 'Purple & Green',
    value: 'purple-green',
    isDark: true,
  },
];
