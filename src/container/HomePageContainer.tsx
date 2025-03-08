import Homepage from "@/pages";
import { useEffect, useState } from "react";
import { usePokemonStore } from "@/utils/store";
import { DEFAULT_URL } from "@/masterdata/constant.ts";
import { usePokemonList } from "@/utils/api-list/query.ts";

const HomePageContainer = () => {
  const [search, setSearch] = useState("");
  const [currentPageURL, setCurrentPageURL] = useState(DEFAULT_URL);
  const [nextPageURL, setNextPageURL] = useState<string | null>("");
  const [previousPageURL, setPreviousPageURL] = useState("");

  const pokemonList = usePokemonStore((state) => state.pokemonList);
  const setPokemonList = usePokemonStore((state) => state.setPokemonList);

  const {
    data: pokemonData,
    isError: errorFetchingPokemon,
    isPending: isFetchingPokemon,
  } = usePokemonList(currentPageURL);

  useEffect(() => {
    if (pokemonData) {
      setPokemonList(pokemonData.results);
      setNextPageURL(pokemonData.next);
      if (pokemonData.previous) setPreviousPageURL(pokemonData.previous);
    }
  }, [pokemonData]);

  if (isFetchingPokemon) return "Loading ...";

  const gotoNextPage = () => {
    if (nextPageURL) setCurrentPageURL(nextPageURL);
  };

  const gotoPreviousPage = () => {
    setCurrentPageURL(previousPageURL);
  };

  const setImageURL = (url: string) => {
    const id = url.split("/")[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };

  const handleSearchPokemon = (value: string) => {
    setSearch(value);
  };
  return (
    <Homepage
      pokemonList={pokemonList}
      nextPageURL={nextPageURL}
      gotoNextPage={gotoNextPage}
      previousPageURL={previousPageURL}
      gotoPreviousPage={gotoPreviousPage}
      setImageURL={setImageURL}
      handleSearchPokemon={handleSearchPokemon}
      search={search}
      errorFetchingPokemon={errorFetchingPokemon}
    />
  );
};

export default HomePageContainer;
