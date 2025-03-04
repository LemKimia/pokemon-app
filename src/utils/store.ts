import { create } from "zustand";
import { IPokemon } from "@/utils/types/results.ts";
import { CapturedPokemon, IDetail } from "@/utils/types/type.ts";
import { initialPokemonDetail } from "@/masterdata/initial-data.ts";
import { persist } from "zustand/middleware";

type PokemonStore = {
  pokemonList: IPokemon[];
  setPokemonList: (pokemonList: IPokemon[]) => void;

  pokemonDetails: IDetail;
  setPokemonDetails: (pokemonDetails: IDetail) => void;

  capturedPokemon: CapturedPokemon[];
  addCapturedPokemon: (
    nickname: string,
    capturedPokemon: CapturedPokemon,
  ) => void;
  removeCapturedPokemon: (nickname: string) => void;
};

export const usePokemonStore = create<PokemonStore>()(
  persist(
    (set) => ({
      pokemonList: [],
      setPokemonList: (pokemonList: IPokemon[]) => set({ pokemonList }),

      pokemonDetails: initialPokemonDetail,
      setPokemonDetails: (pokemonDetails: IDetail) => set({ pokemonDetails }),

      capturedPokemon: [],
      addCapturedPokemon: (nickname, capturedPokemon) =>
        set((state) => ({
          capturedPokemon: [
            ...state.capturedPokemon,
            {
              ...capturedPokemon,
              name: nickname,
            },
          ],
        })),
      removeCapturedPokemon: (nickname: string) =>
        set((state) => ({
          capturedPokemon: state.capturedPokemon.filter(
            (x) => x.nickname !== nickname,
          ),
        })),
    }),
    {
      name: "pokemon-store",
    },
  ),
);
