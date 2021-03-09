import {
  COLOR_BONDS,
  COLOR_BUY,
  COLOR_BW,
  COLOR_CASH,
  COLOR_CREDIT,
  COLOR_MK,
  COLOR_SELL,
  COLOR_SHARES,
  COLOR_ZERT,
} from 'src/app/core/constants/chart-colors.constants';
import { ISeries } from 'src/app/core/models/series';

export const BASIC_SHARE_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'kurs',
    label: 'Kurs',
    color: COLOR_MK,
  },
  {
    date: 'date',
    value: 'bw',
    label: 'Buchwert',
    color: COLOR_BW,
  },
];

export const DEPOT_SHARE_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'sharesSum',
    label: 'Aktien',
    color: COLOR_SHARES,
  },
  {
    date: 'date',
    value: 'cash',
    label: 'Bargeld',
    color: COLOR_CASH,
  },
  {
    date: 'date',
    value: 'bondSum',
    label: 'Anleihen',
    color: COLOR_BONDS,
  },
  {
    date: 'date',
    value: 'creditSum',
    label: 'Kredite',
    color: COLOR_CREDIT,
  },
  {
    date: 'date',
    value: 'certSum',
    label: 'Zertis',
    color: COLOR_ZERT,
  },
];

export const ORDER_SHARE_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'buySum',
    label: 'Buys',
    color: COLOR_BUY,
  },
  {
    date: 'date',
    value: 'sellSum',
    label: 'Sells',
    color: COLOR_SELL,
  },
];

export const ACTIVITY_SHARE_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'activity',
    label: 'Aktivität',
    color: COLOR_MK,
  },
];

export const AGSX_SHARE_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'agsxP',
    label: 'AGSX-P.',
    color: COLOR_MK,
  },
];
