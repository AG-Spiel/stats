import { Component, OnInit } from '@angular/core';
import { URLS } from 'src/app/core/constants/urls.constants';
import {
  COVER_CHART_SERIES,
  DEPOT_CHART_SERIES,
  MARKET_CHART_SERIES,
  ORDER_CHART_SERIES,
  PREM_CHART_SERIES,
} from '../../models/charts';

@Component({
  selector: 'app-market-board',
  templateUrl: './market-board.component.html',
  styleUrls: ['./market-board.component.scss'],
})
export class MarketBoardComponent implements OnInit {
  marketChartUrl = URLS.AGS_STATS.MARKET.MARKET;
  marketChartSeries = MARKET_CHART_SERIES;
  orderChartUrl = URLS.AGS_STATS.MARKET.ORDER;
  orderChartSeries = ORDER_CHART_SERIES;
  depotChartUrl = URLS.AGS_STATS.MARKET.DEPOT;
  depotChartSeries = DEPOT_CHART_SERIES;
  coverChartUrl = URLS.AGS_STATS.MARKET.COVER;
  coverChartSeries = COVER_CHART_SERIES;
  premChartUrl = URLS.AGS_STATS.MARKET.PREMIUM;
  premChartSeries = PREM_CHART_SERIES;

  constructor() {}

  ngOnInit(): void {}
}
