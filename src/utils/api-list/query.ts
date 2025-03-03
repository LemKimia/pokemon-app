import { useQuery } from "@tanstack/react-query";
import { getPokemon, getPokemonDetails } from "@/utils/api-list/api.ts";

export const usePokemonList = (currentPageUrl: string) => {
  return useQuery({
    queryKey: ["pokemonList", currentPageUrl],
    queryFn: () => getPokemon(currentPageUrl),
  });
};

export const usePokemonDetails = (name: string) => {
  return useQuery({
    queryKey: ["pokemonDetails", name],
    queryFn: () => getPokemonDetails(name),
  });
};
