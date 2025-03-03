export type IDetail = {
  abilities: PokemonAbilities[];
  alias?: string;
  id: number;
  moves: PokemonMoves[];
  name: string;
  url: string;
  sprites: PokemonSprites;
  types: PokemonTypes[];
};

export type PokemonAbilities = {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
};

export type PokemonMoves = {
  move: NamedAPIResource;
};

export type PokemonSprites = {
  other: {
    dream_world: {
      front_default: string;
    };
  };
};

export type PokemonTypes = {
  slot: number;
  type: NamedAPIResource;
};
export interface NamedAPIResource {
  name: string;
  url: string;
}
