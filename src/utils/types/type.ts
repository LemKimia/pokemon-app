export interface IPokemon {
  name: string;
  url: string;
}

export interface IResponse<TDatas> {
  count: number;
  next: string;
  previous: null | string;
  results: TDatas;
}

export interface IDetail {
  abilities: Ability[];
  id: number;
  moves: Move[];
  name: string;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Move {
  move: Species;
}
export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  other?: Other;
}

export interface Other {
  dream_world: DreamWorld;
}

export interface DreamWorld {
    front_default: string;
    front_female:  null;
}
export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}
export interface Type {
  slot: number;
  type: Species;
}
