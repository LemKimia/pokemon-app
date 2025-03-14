import { create } from "zustand";
import { IPokemon } from "@/utils/types/results.ts";
import { CapturedPokemon, IDetail } from "@/utils/types/type.ts";
import { initialPokemonDetail } from "@/masterdata/initial-data.ts";
import { persist } from "zustand/middleware";

type PokemonStore = {
  pokemonList: IPokemon[];
  setPokemonList: (pokemonList: IPokemon[]) => void;

  // TODO: buat array pokemon detail.
  //  setiap detail pokemon yang di klik akan di simpan di array ini, sehingga tidak perlu request ke API lagi. kalau sudah lebih dari 6, hapus yang pertama.

  pokemonDetails: IDetail;
  setPokemonDetails: (pokemonDetails: IDetail) => void;

  capturedPokemon: CapturedPokemon[];
  addCapturedPokemon: (
    nickname: string,
    capturedPokemon: Omit<CapturedPokemon, "nickname">,
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
              nickname: nickname,
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
