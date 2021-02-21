import { BreakpointObserver } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockThemeService: jasmine.SpyObj<ThemeService>;
  let mockBreakpointObserver: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(async () => {
    mockThemeService = jasmine.createSpyObj('ThemeService', ['setTheme']);
    mockBreakpointObserver = jasmine.createSpyObj('BreakpointObserver', [
      'observe',
    ]);

    mockThemeService.setTheme.and.returnValue();
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
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and set "pink-bluegrey" theme', () => {
    expect(component).toBeTruthy();
    expect(mockThemeService.setTheme).toHaveBeenCalledOnceWith('pink-bluegrey');
    expect(mockBreakpointObserver.observe).toHaveBeenCalled();
  });

  it('should change the theme', () => {
    component.themeChangeHandler('newTheme');
    expect(mockThemeService.setTheme).toHaveBeenCalledWith('newTheme');
  });
});
