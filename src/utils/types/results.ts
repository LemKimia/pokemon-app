export interface IResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
export interface IPokemon {
  name: string;
  url: string;
}
