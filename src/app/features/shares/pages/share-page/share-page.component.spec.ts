import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';

import { SharePageComponent } from './share-page.component';

describe('SharePageComponent', () => {
  let component: SharePageComponent;
  let fixture: ComponentFixture<SharePageComponent>;

  let mockRouterService: jasmine.SpyObj<Router>;
  let mockStatsService: jasmine.SpyObj<AgsStatsService>;

  const dummyShare = {
    wkn: 140037,
    name: 'Smith Ag',
    founding: 'Date',
    ceo: 'James-Smith',
    ceoRegister: 'Date',
    isBanned: false,
    isUserproject: false,
    inLiquidation: false,
  };

  let dummyShareWkn: string | null;

  const dummyParam = {
    get: (name: string) => {
      return dummyShareWkn;
    },
  };

  const dummyActivatedRoute = {
    paramMap: of(dummyParam),
  };

  beforeEach(async () => {
    mockRouterService = jasmine.createSpyObj('Router', ['navigate']);
    mockStatsService = jasmine.createSpyObj('AgsStatsService', ['getShare']);

    await TestBed.configureTestingModule({
      declarations: [SharePageComponent],
      providers: [
        {
          provide: Router,
          useValue: mockRouterService,
        },
        {
          provide: AgsStatsService,
          useValue: mockStatsService,
        },
        {
          provide: ActivatedRoute,
          useValue: dummyActivatedRoute,
        },
      ],
    }).compileComponents();

    // init mocks
    dummyShareWkn = '140037';
    dummyActivatedRoute.paramMap = of(dummyParam);
    mockRouterService.navigate.and.returnValue(Promise.resolve(true));
    mockStatsService.getShare.and.returnValue(of(dummyShare));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should create component and request index data',
    waitForAsync(() => {
      expect(component).toBeTruthy();
      expect(mockStatsService.getShare).toHaveBeenCalledWith(
        dummyShareWkn as string
      );

      fixture.whenStable().then(() => {
        expect(component.share).toEqual(dummyShare);
        expect(component.basicChartUrl).toBeDefined();
        expect(component.orderChartUrl).toBeDefined();
        expect(component.depotChartUrl).toBeDefined();
      });
    })
  );
});
