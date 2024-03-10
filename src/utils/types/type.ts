export interface IPokemon {
  image: string | undefined;
  name: string;
  url: string;
}

export interface IResponse<TDatas> {
  count: number;
  next: string;
  previous: null | string ;
  results: TDatas;
}
