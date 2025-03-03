import Homepage from "@/pages";
import { useEffect, useState } from "react";
import { IPokemon } from "@/utils/types/results.ts";
import { getPokemon } from "@/utils/api-list/api.ts";
import { toast } from "sonner";

const HomePageContainer = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [search, setSearch] = useState("");
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon",
  );
  const [nextPageURL, setNextPageURL] = useState("");
  const [previousPageURL, setPreviousPageURL] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getPokemon(currentPageURL);

        setLoading(false);
        setPokemonList(response.results);
        setNextPageURL(response.next);
        setPreviousPageURL(response.previous!);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    };

    fetchData();
  }, [currentPageURL]);

  if (loading) return "Loading ...";

  function gotoNextPage() {
    setCurrentPageURL(nextPageURL);
  }

  function gotoPreviousPage() {
    setCurrentPageURL(previousPageURL);
  }

  const setImageURL = (url: string) => {
    const id = url.split("/")[6];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
  };

  const handleChange = (value: string) => {
    setSearch(value);
    console.log(search);
  };
  return (
    <Homepage
      pokemonList={pokemonList}
      nextPageURL={nextPageURL}
      gotoNextPage={gotoNextPage}
      previousPageURL={previousPageURL}
      gotoPreviousPage={gotoPreviousPage}
      setImageURL={setImageURL}
      handleChange={handleChange}
      search={search}
    />
  );
};

export default HomePageContainer;
