import { create } from "zustand";
import { IPokemon } from "@/utils/types/results.ts";
import { IDetail } from "@/utils/types/type.ts";
import { initialPokemonDetail } from "@/masterdata/initial-data.ts";

type PokemonStore = {
  pokemonList: IPokemon[];
  setPokemonList: (pokemonList: IPokemon[]) => void;

  pokemonDetails: IDetail;
  setPokemonDetails: (pokemonDetails: IDetail) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemonList: [],
  setPokemonList: (pokemonList: IPokemon[]) => set({ pokemonList }),

  pokemonDetails: initialPokemonDetail,
  setPokemonDetails: (pokemonDetails: IDetail) => set({ pokemonDetails }),
}));
