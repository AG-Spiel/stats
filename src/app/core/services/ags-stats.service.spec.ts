import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { URLS } from '../constants/urls.constants';
import { IAg, IIndex, IIndexMin } from '../models/ags-stats';

import { AgsStatsService } from './ags-stats.service';

describe('AgsStatsService', () => {
  let service: AgsStatsService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  const dummyIndizes: IIndex[] = [
    {
      id: '1',
      name: 'test',
      boersenwert: 1,
      buchwert: 1,
      bargeld: 1,
      aktien: 1,
      anleihen: 1,
      kredite: 1,
      highscore: 1,
      punkte: 1,
      gruendung: 'datum',
    },
  ];
  const dummyShares: IAg[] = [
    {
      wkn: 1234,
      name: 'Test',
      founding: 'Datum',
      ceo: 'Name',
      ceoRegister: 'datum',
      isBanned: false,
      isUserproject: false,
      inLiquidation: false,
    },
  ];
  const dummyShare: IAg = {
    wkn: 1234,
    name: 'Test',
    founding: 'Datum',
    ceo: 'Name',
    ceoRegister: 'datum',
    isBanned: false,
    isUserproject: false,
    inLiquidation: false,
  };
  const dummyIndex: IIndexMin = {
    id: '1',
    name: 'test',
  };

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: mockHttpClient,
        },
      ],
    });
    service = TestBed.inject(AgsStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(
    'should request all indizes',
    waitForAsync(() => {
      mockHttpClient.get.and.returnValue(of(dummyIndizes));

      const res = service.getAllIndizes();
      expect(res).toBeDefined();
      res.subscribe((indizes) => {
        expect(indizes.length).toBeGreaterThan(0);
        expect(indizes[0]).toEqual(dummyIndizes[0]);

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          URLS.AGS_STATS.INDEX.ALL
        );
      });
    })
  );

  it(
    'should request all shares',
    waitForAsync(() => {
      mockHttpClient.get.and.returnValue(of(dummyShares));

      const res = service.getAllShares();
      expect(res).toBeDefined();
      res.subscribe((shares) => {
        expect(shares.length).toBeGreaterThan(0);
        expect(shares[0]).toEqual(dummyShares[0]);

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          URLS.AGS_STATS.SHARE.ALL
        );
      });
    })
  );

  it(
    'should request a share',
    waitForAsync(() => {
      const wkn = '1';
      mockHttpClient.get.and.returnValue(of(dummyShare));

      const res = service.getShare(wkn);
      expect(res).toBeTruthy();
      res.subscribe((share) => {
        expect(share).toBeDefined();
        expect(share).toEqual(dummyShare);

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          URLS.AGS_STATS.SHARE.WKN(wkn)
        );
      });
    })
  );

  it(
    'should request a index',
    waitForAsync(() => {
      const indexId = '1';
      mockHttpClient.get.and.returnValue(of(dummyIndex));

      const res = service.getIndex(indexId);
      expect(res).toBeTruthy();
      res.subscribe((index) => {
        expect(index).toBeDefined();
        expect(index).toEqual(dummyIndex);

        expect(mockHttpClient.get).toHaveBeenCalledWith(
          URLS.AGS_STATS.INDEX.ID(indexId)
        );
      });
    })
  );
});
