import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { URLS } from 'src/app/core/constants/urls.constants';
import { IAg } from 'src/app/core/models/ags-stats';
import { AgsStatsService } from 'src/app/core/services/ags-stats.service';
import {
  ACTIVITY_SHARE_CHART,
  AGSX_SHARE_CHART,
  BASIC_SHARE_CHART,
  DEPOT_SHARE_CHART,
  ORDER_SHARE_CHART,
} from '../../models/chart';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss'],
})
export class SharePageComponent implements OnInit, OnDestroy {
  share?: IAg;
  orderChartUrl?: string;
  orderChartSeries = ORDER_SHARE_CHART;
  depotChartUrl?: string;
  depotChartSeries = DEPOT_SHARE_CHART;
  basicChartUrl?: string;
  basicChartSeries = BASIC_SHARE_CHART;
  activityChartUrl?: string;
  activityChartSeries = ACTIVITY_SHARE_CHART;
  agsxChartUrl?: string;
  agsxChartSeries = AGSX_SHARE_CHART;
  private subscriptions: Subscription[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly statsService: AgsStatsService
  ) {}

  private searchShare(wkn: string): void {
    this.statsService
      .getShare(wkn)
      .toPromise()
      .then((share) => {
        if (share !== null) {
          this.share = share;
          this.orderChartUrl = URLS.AGS_STATS.SHARE.ORDER(wkn);
          this.depotChartUrl = URLS.AGS_STATS.SHARE.DEPOT(wkn);
          this.basicChartUrl = URLS.AGS_STATS.SHARE.CHART(wkn);
          this.activityChartUrl = URLS.AGS_STATS.SHARE.ACTIVITY(wkn);
          this.agsxChartUrl = URLS.AGS_STATS.SHARE.AGSX(wkn);
        } else {
          this.router.navigate(['/not-found']);
        }
      });
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((param) => {
        const wkn = param.get('wkn');
        if (wkn !== null) {
          this.searchShare(wkn);
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
