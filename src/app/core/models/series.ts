export interface IColorSeries {
  color: string;
  colorLabel: string;
}

export interface ISeries {
  date: string;
  value: string;
  label: string;
  color: IColorSeries;
}
