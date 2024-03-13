export interface IResponse<IPokemon> {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemon;
}
export interface IPokemon {
  name: string;
  url: string;
}
