

export interface IDetail {
  abilities: Ability[];
  id: number;
  moves: Move[];
  name: string;
  url: string;
  alias?: string;
  sprites: Sprites;
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

export interface Sprites {
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
}

export interface DreamWorld {
  front_default: string;
}
export interface Type {
  slot: number;
  type: Species;
}
export interface Species {
  name: string;
  url: string;
}
