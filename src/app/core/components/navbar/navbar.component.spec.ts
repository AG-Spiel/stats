import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { STATE_THEME_KEY } from 'src/app/core/constants/states.constants';
import { LocalStorageService } from '../../services/local-storage.service';
import { ThemeService } from '../../services/theme.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockThemeService: jasmine.SpyObj<ThemeService>;
  let mockBreakpointObserver: jasmine.SpyObj<BreakpointObserver>;
  let mockStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj('ThemeService', [
      'setTheme',
      'setDefaultTheme',
      'setChartTheme',
    ]);
    mockBreakpointObserver = jasmine.createSpyObj('BreakpointObserver', [
      'observe',
    ]);
    mockStorageService = jasmine.createSpyObj('StorageService', [
      'setItem',
      'getItem',
    ]);

    mockBreakpointObserver.observe.and.returnValue(
      of({ matches: false, breakpoints: {} })
    );

    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {
          provide: ThemeService,
          useValue: mockThemeService,
        },
        {
          provide: BreakpointObserver,
          useValue: mockBreakpointObserver,
        },
        {
          provide: LocalStorageService,
          useValue: mockStorageService,
        },
      ],
      imports: [BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  it(
    'should create with default theme',
    waitForAsync(() => {
      mockThemeService.setDefaultTheme.and.returnValue();

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
        expect(mockThemeService.setDefaultTheme).toHaveBeenCalled();
        expect(mockBreakpointObserver.observe).toHaveBeenCalled();
      });
    })
  );

  it('should reload window', () => {
    mockBreakpointObserver.observe.and.returnValue(
      of({ matches: false, breakpoints: {} })
    );
    const mockWindow = {
      location: {
        reload: jasmine.createSpy(),
      },
    };

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      component.reloadWindowToApplyThemes((mockWindow as unknown) as Window);
      expect(mockWindow.location.reload).toHaveBeenCalled();
    });
  });

  it(
    'should change the theme',
    waitForAsync(() => {
      mockStorageService.setItem.and.returnValue();
      mockBreakpointObserver.observe.and.returnValue(
        of({ matches: false, breakpoints: {} })
      );
      const reloadWindowSpy = spyOn(component, 'reloadWindowToApplyThemes');

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        component.themeChangeHandler('newTheme');
        expect(mockStorageService.setItem).toHaveBeenCalledWith(
          STATE_THEME_KEY,
          'newTheme'
        );
        expect(reloadWindowSpy).toHaveBeenCalled();
      });
    })
  );

  it(
    'should create with favoriteTheme',
    waitForAsync(() => {
      const testTheme = 'deeppurple-amber';
      mockStorageService.getItem.and.returnValue(testTheme);
      mockThemeService.setTheme.and.returnValue();
      mockThemeService.setChartTheme.and.returnValue();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockStorageService.getItem).toHaveBeenCalledWith(
          STATE_THEME_KEY
        );
        expect(mockThemeService.setTheme).toHaveBeenCalledWith(testTheme);
        expect(mockThemeService.setChartTheme).toHaveBeenCalledWith(testTheme);
      });
    })
  );

  it(
    'should open an external site in a new tab',
    waitForAsync(() => {
      spyOn(window, 'open');
      const url = 'someUrl';

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        component.goToExternalLink(url);
        expect(window.open).toHaveBeenCalledWith(url, '_blank', 'noopener');
      });
    })
  );

  it(
    'should toggle isTreemapExpanded',
    waitForAsync(() => {
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        component.toggleTreemap();
        expect(component.isTreemapExpanded).toEqual(true);
      });
    })
  );
});
