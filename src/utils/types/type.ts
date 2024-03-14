import { Key } from "react";

export interface IDetail {
  alias: Key | null | undefined;
  abilities: Ability[];
  id: number;
  moves: Move[];
  name: string;
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
  other?: Other;
}

export interface Other {
  dream_world: DreamWorld;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}
export interface Type {
  slot: number;
  type: Species;
}
export interface Species {
  name: string;
  url: string;
}
