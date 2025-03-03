import { create } from "zustand";
import { IPokemon } from "@/utils/types/results.ts";

type PokemonStore = {
  pokemonList: IPokemon[];
  setPokemonList: (pokemonList: IPokemon[]) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemonList: [],
  setPokemonList: (pokemonList: IPokemon[]) => set({ pokemonList }),
}));
