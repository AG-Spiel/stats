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

export const BASIC_INDEX_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'boersenwert',
    label: 'Marktkapitalisierung',
    color: COLOR_MK,
  },
  {
    date: 'date',
    value: 'bw',
    label: 'Buchwert',
    color: COLOR_BW,
  },
];

export const DEPOT_INDEX_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'aktien',
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
    value: 'anleihen',
    label: 'Anleihen',
    color: COLOR_BONDS,
  },
  {
    date: 'date',
    value: 'kredite',
    label: 'Kredite',
    color: COLOR_CREDIT,
  },
  {
    date: 'date',
    value: 'zertis',
    label: 'Zertis',
    color: COLOR_ZERT,
  },
];

export const ORDER_INDEX_CHART: ISeries[] = [
  {
    date: 'date',
    value: 'buys',
    label: 'Buys',
    color: COLOR_BUY,
  },
  {
    date: 'date',
    value: 'sells',
    label: 'Sells',
    color: COLOR_SELL,
  },
];
