import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../constants/urls.constants';
import { IAg, IIndex, IIndexMin } from '../models/ags-stats';

@Injectable({
  providedIn: 'root',
})
export class AgsStatsService {
  constructor(private readonly http: HttpClient) {}

  private request<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getAllIndizes(): Observable<IIndex[]> {
    return this.request<IIndex[]>(URLS.AGS_STATS.INDEX.ALL);
  }

  getAllShares(): Observable<IAg[]> {
    return this.request<IAg[]>(URLS.AGS_STATS.SHARE.ALL);
  }

  getShare(wkn: string): Observable<IAg> {
    return this.request<IAg>(URLS.AGS_STATS.SHARE.WKN(wkn));
  }

  getIndex(id: string): Observable<IIndexMin> {
    return this.request<IIndexMin>(URLS.AGS_STATS.INDEX.ID(id));
  }
}
