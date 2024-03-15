import Layout from "@/components/layout";
import Pagination from "@/components/pagination";
import PokemonCard from "@/components/pokemon-card";
import { getPokemon } from "@/utils/api-list/api";
import { IPokemon } from "@/utils/types/results";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageURL, setNextPageURL] = useState("");
  const [previousPageURL, setPreviousPageURL] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log(loading);
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
    const pokeApiLink = url;
    const id = pokeApiLink.split("/")[6];
    const newLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return newLink;
  };

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            image_url={setImageURL(pokemon.url)}
          />
        ))}
      </div>
      <Pagination
        gotoNextPage={nextPageURL ? gotoNextPage : null}
        gotoPreviousPage={previousPageURL ? gotoPreviousPage : null}
      />
    </Layout>
  );
};

export default Homepage;
