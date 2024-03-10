export interface IPokemon {
  name: string;
  url: string;
}

export interface IResponse<TDatas> {
  count: number;
  next: string;
  previous: null | string ;
  results: TDatas;
}
