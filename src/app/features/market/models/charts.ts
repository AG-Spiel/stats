import {
  COLOR_BBW,
  COLOR_BONDS,
  COLOR_BUY,
  COLOR_BW,
  COLOR_CASH,
  COLOR_COVER,
  COLOR_CREDIT,
  COLOR_FP,
  COLOR_MK,
  COLOR_NETTCASH,
  COLOR_NO_COVER,
  COLOR_NO_PREM,
  COLOR_PLAYER,
  COLOR_PREM,
  COLOR_PREM_GOLD,
  COLOR_PREM_SILVER,
  COLOR_SELL,
  COLOR_SHARES,
  COLOR_SW,
  COLOR_ZERT,
} from 'src/app/core/constants/chart-colors.constants';
import { ISeries } from 'src/app/core/models/series';

export const MARKET_CHART_SERIES: ISeries[] = [
  {
    date: 'date',
    value: 'bbw',
    label: 'BBW',
    color: COLOR_BBW,
  },
  {
    date: 'date',
    value: 'bw',
    label: 'BW',
    color: COLOR_BW,
  },
  {
    date: 'date',
    value: 'fp',
    label: 'FP',
    color: COLOR_FP,
  },
  {
    date: 'date',
    value: 'sw',
    label: 'SW',
    color: COLOR_SW,
  },
  {
    date: 'date',
    value: 'kurs',
    label: 'Marktkapitalisierung',
    color: COLOR_MK,
  },
];

export const DEPOT_CHART_SERIES: ISeries[] = [
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
  {
    date: 'date',
    value: 'nettcash',
    label: 'Nettcash',
    color: COLOR_NETTCASH,
  },
];

export const ORDER_CHART_SERIES: ISeries[] = [
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
  {
    date: 'date',
    value: 'cash',
    label: 'Bargeld',
    color: COLOR_CASH,
  },
];

export const COVER_CHART_SERIES: ISeries[] = [
  {
    date: 'date',
    value: 'ja',
    label: 'Schutz',
    color: COLOR_COVER,
  },
  {
    date: 'date',
    value: 'nein',
    label: 'Kein Schutz',
    color: COLOR_NO_COVER,
  },
  {
    date: 'date',
    value: 'spieler',
    label: 'Spieler',
    color: COLOR_PLAYER,
  },
];

export const PREM_CHART_SERIES: ISeries[] = [
  {
    date: 'date',
    value: 'premium',
    label: 'Premium',
    color: COLOR_PREM,
  },
  {
    date: 'date',
    value: 'kein',
    label: 'Kein Premium',
    color: COLOR_NO_PREM,
  },
  {
    date: 'date',
    value: 'gold',
    label: 'Gold Premium',
    color: COLOR_PREM_GOLD,
  },
  {
    date: 'date',
    value: 'silber',
    label: 'Silber Premium',
    color: COLOR_PREM_SILVER,
  },
  {
    date: 'date',
    value: 'spieler',
    label: 'Spieler',
    color: COLOR_PLAYER,
  },
];
