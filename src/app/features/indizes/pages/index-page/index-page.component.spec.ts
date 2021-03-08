import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';

import { IndexPageComponent } from './index-page.component';

describe('IndexPageComponent', () => {
  let component: IndexPageComponent;
  let fixture: ComponentFixture<IndexPageComponent>;

  let mockRouterService: jasmine.SpyObj<Router>;
  let mockStatsService: jasmine.SpyObj<AgsStatsService>;

  const dummyIndex = {
    name: 'IndexName',
    id: '2435',
  };

  let dummyIndexId: string | null;

  const dummyParam = {
    get: (name: string) => {
      return dummyIndexId;
    },
  };

  const dummyActivatedRoute = {
    paramMap: of(dummyParam),
  };

  beforeEach(async () => {
    mockRouterService = jasmine.createSpyObj('Router', ['navigate']);
    mockStatsService = jasmine.createSpyObj('AgsStatsService', ['getIndex']);

    await TestBed.configureTestingModule({
      declarations: [IndexPageComponent],
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
    dummyIndexId = '2345';
    dummyActivatedRoute.paramMap = of(dummyParam);
    mockRouterService.navigate.and.returnValue(Promise.resolve(true));
    mockStatsService.getIndex.and.returnValue(of(dummyIndex));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    'should create component and request index data',
    waitForAsync(() => {
      expect(component).toBeTruthy();
      expect(mockStatsService.getIndex).toHaveBeenCalledWith(
        dummyIndexId as string
      );

      fixture.whenStable().then(() => {
        expect(component.index).toEqual(dummyIndex);
        expect(component.basicChartUrl).toBeDefined();
        expect(component.orderChartUrl).toBeDefined();
        expect(component.depotChartUrl).toBeDefined();
      });
    })
  );
});
