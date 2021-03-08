import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { IAg } from 'src/app/core/models/ags-stats';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';
import { SharesTableComponent } from './shares-table.component';

describe('SharesTableComponent', () => {
  let component: SharesTableComponent;
  let fixture: ComponentFixture<SharesTableComponent>;

  let mockAgsStatsService: jasmine.SpyObj<AgsStatsService>;

  const dummyShares: IAg[] = [
    {
      wkn: 140037,
      name: 'Smith AG',
      founding: new Date().toISOString(),
      ceo: 'James-Smith',
      ceoRegister: new Date().toISOString(),
      isBanned: false,
      isUserproject: false,
      inLiquidation: false,
    },
    {
      wkn: 100001,
      name: 'Rady',
      founding: new Date().toISOString(),
      ceo: 'Rady',
      ceoRegister: new Date().toISOString(),
      isBanned: false,
      isUserproject: false,
      inLiquidation: false,
    },
  ];

  beforeEach(async () => {
    mockAgsStatsService = jasmine.createSpyObj('AgsStatsService', [
      'getAllShares',
    ]);

    await TestBed.configureTestingModule({
      declarations: [SharesTableComponent],
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatInputModule,
      ],
      providers: [
        {
          provide: AgsStatsService,
          useValue: mockAgsStatsService,
        },
      ],
    }).compileComponents();

    // init mocks
    mockAgsStatsService.getAllShares.and.returnValue(of(dummyShares));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe shares', () => {
    expect(component.data).toBeDefined();
    expect(component.data.data).toEqual(dummyShares);
    expect(mockAgsStatsService.getAllShares).toHaveBeenCalled();
  });

  it('should search in shares', () => {
    const event = {
      target: {
        value: 'Rady',
      },
    };
    component.searchShares((event as unknown) as Event);
    expect(component.data.filteredData[0]).toEqual(dummyShares[1]);
  });
});
