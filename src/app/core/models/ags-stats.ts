export interface IIndex {
  name: string;
  id: string;
  boersenwert: number;
  buchwert: number;
  aktien: number;
  anleihen: number;
  kredite: number;
  bargeld: number;
  highscore: number;
  punkte: number;
  gruendung: string;
}

export interface IIndexMin {
  name: string;
  id: string;
}

export interface IAg {
  wkn: number;
  name: string;
  founding: string;
  ceo: string;
  ceoRegister: string;
  isBanned: boolean | null;
  isUserproject: boolean | null;
  inLiquidation: boolean | null;
}
