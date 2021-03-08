import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { URLS } from 'src/app/core/constants/urls.constants';
import { IIndexMin } from 'src/app/core/models/ags-stats';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';
import {
  BASIC_INDEX_CHART,
  DEPOT_INDEX_CHART,
  ORDER_INDEX_CHART,
} from '../../models/chart';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent implements OnInit, OnDestroy {
  index?: IIndexMin;
  orderChartUrl?: string;
  orderChartSeries = ORDER_INDEX_CHART;
  depotChartUrl?: string;
  depotChartSeries = DEPOT_INDEX_CHART;
  basicChartUrl?: string;
  basicChartSeries = BASIC_INDEX_CHART;
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly statsService: AgsStatsService
  ) {}

  private searchIndex(indexID: string): void {
    this.statsService
      .getIndex(indexID)
      .toPromise()
      .then((index) => {
        if (index !== null) {
          this.index = index;
          this.basicChartUrl = URLS.AGS_STATS.INDEX.CHART(indexID);
          this.depotChartUrl = URLS.AGS_STATS.INDEX.DEPOT(indexID);
          this.orderChartUrl = URLS.AGS_STATS.INDEX.ORDER(indexID);
        } else {
          this.router.navigate(['/not-found']);
        }
      });
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((param) => {
        const id = param.get('id');
        if (id !== null) {
          this.searchIndex(id);
        } else {
          this.router.navigate(['/not-found']);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
