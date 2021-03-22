import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { STATE_THEME_KEY } from 'src/app/core/constants/states.constants';
import { VALID_THEMES_TYPES } from 'src/app/core/constants/themes.constants';
import { ThemeService } from '../../services/theme.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('isTreemapCollapsed', style({ transform: 'rotate(0deg)' })),
      state('isTreemapExpanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'isTreemapExpanded <=> isTreemapCollapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  isTreemapExpanded = false;
  faGithub = faGithub;
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

  goToExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener');
  }

  themeChangeHandler(themeToSet: string): void {
    this.storageService.setItem(STATE_THEME_KEY, themeToSet);
    this.reloadWindowToApplyThemes(window);
  }

  reloadWindowToApplyThemes(window: Window): void {
    window.location.reload();
  }

  toggleTreemap(): void {
    this.isTreemapExpanded = !this.isTreemapExpanded;
  }

  private chooseTheme(): void {
    const favoritedTheme = this.storageService.getItem(STATE_THEME_KEY);
    if (favoritedTheme != null && VALID_THEMES_TYPES.includes(favoritedTheme)) {
      this.themeService.setTheme(favoritedTheme);
      this.themeService.setChartTheme(favoritedTheme);
    } else {
      this.themeService.setDefaultTheme();
    }
  }
}
