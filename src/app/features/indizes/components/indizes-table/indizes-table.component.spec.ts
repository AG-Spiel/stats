import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { IIndex } from 'src/app/core/models/ags-stats';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';

import { IndizesTableComponent } from './indizes-table.component';

describe('IndizesTableComponent', () => {
  let component: IndizesTableComponent;
  let fixture: ComponentFixture<IndizesTableComponent>;

  let mockAgsStatsService: jasmine.SpyObj<AgsStatsService>;

  const dummyIndizes: IIndex[] = [
    {
      name: 'test',
      id: '1',
      boersenwert: 45,
      buchwert: 45,
      aktien: 45,
      anleihen: 45,
      kredite: 45,
      bargeld: 45,
      highscore: 45,
      punkte: 45,
      gruendung: 'Datum',
    },
    {
      name: 'Index2',
      id: '2',
      boersenwert: 45,
      buchwert: 45,
      aktien: 45,
      anleihen: 45,
      kredite: 45,
      bargeld: 45,
      highscore: 45,
      punkte: 45,
      gruendung: 'Datum',
    },
  ];

  beforeEach(async () => {
    mockAgsStatsService = jasmine.createSpyObj('AgsStatsService', [
      'getAllIndizes',
    ]);

    await TestBed.configureTestingModule({
      declarations: [IndizesTableComponent],
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
    mockAgsStatsService.getAllIndizes.and.returnValue(of(dummyIndizes));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndizesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe indizes', () => {
    expect(component.data).toBeDefined();
    expect(component.data.data).toEqual(dummyIndizes);
    expect(mockAgsStatsService.getAllIndizes).toHaveBeenCalled();
  });

  it('should search in indizes', () => {
    const event = {
      target: {
        value: 'Index',
      },
    };
    component.searchIndizes((event as unknown) as Event);
    expect(component.data.filteredData[0]).toEqual(dummyIndizes[1]);
  });
});
