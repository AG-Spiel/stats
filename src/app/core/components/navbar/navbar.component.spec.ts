import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { STATE_THEME_KEY } from 'src/app/core/constants/states.constants';
import { DEFAULT_THEME } from 'src/app/core/constants/themes.constants';
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
    mockThemeService = jasmine.createSpyObj('ThemeService', ['setTheme']);
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  it(
    'should create and set default theme',
    waitForAsync(() => {
      mockThemeService.setTheme.and.returnValue();

      mockStorageService.getItem.and.returnValue(null);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component).toBeTruthy();
        expect(mockStorageService.getItem).toHaveBeenCalledWith(
          STATE_THEME_KEY
        );
        expect(mockThemeService.setTheme).toHaveBeenCalledOnceWith(
          DEFAULT_THEME
        );
        expect(mockBreakpointObserver.observe).toHaveBeenCalled();
      });
    })
  );

  it(
    'should change the theme',
    waitForAsync(() => {
      mockThemeService.setTheme.and.returnValue();
      mockBreakpointObserver.observe.and.returnValue(
        of({ matches: false, breakpoints: {} })
      );
      mockStorageService.getItem.and.returnValue(null);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        component.themeChangeHandler('newTheme');
        expect(mockThemeService.setTheme).toHaveBeenCalledWith('newTheme');
      });
    })
  );

  it(
    'should create with favoriteTheme',
    waitForAsync(() => {
      const testTheme = 'deeppurple-amber';
      mockStorageService.getItem.and.returnValue(testTheme);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(mockStorageService.getItem).toHaveBeenCalledWith(
          STATE_THEME_KEY
        );
        expect(mockThemeService.setTheme).toHaveBeenCalledWith(testTheme);
        expect(mockStorageService.setItem).toHaveBeenCalledWith(
          STATE_THEME_KEY,
          testTheme
        );
      });
    })
  );
});
