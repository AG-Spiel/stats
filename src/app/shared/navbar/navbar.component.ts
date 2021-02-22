import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { STATE_THEME_KEY } from 'src/app/constants/states.constants';
import {
  DEFAULT_THEME,
  VALID_THEMES_TYPES,
} from 'src/app/constants/themes.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly themeService: ThemeService,
    private readonly storageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.chooseTheme();
  }

  themeChangeHandler(themeToSet: string): void {
    this.themeService.setTheme(themeToSet);
    this.storageService.setItem(STATE_THEME_KEY, themeToSet);
  }

  private chooseTheme(): void {
    const favoritedTheme = this.storageService.getItem(STATE_THEME_KEY);
    if (favoritedTheme != null && VALID_THEMES_TYPES.includes(favoritedTheme)) {
      this.themeService.setTheme(favoritedTheme);
      this.storageService.setItem(STATE_THEME_KEY, favoritedTheme);
    } else {
      this.themeService.setTheme(DEFAULT_THEME);
    }
  }
}
