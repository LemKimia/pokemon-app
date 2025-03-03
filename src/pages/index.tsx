import Layout from "@/components/layout";
import Pagination from "@/components/pagination";
import PokemonCard from "@/components/pokemon-card";
import { getPokemon } from "@/utils/api-list/api";
import { IPokemon } from "@/utils/types/results";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [search, setSearch] = useState("");
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
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
    <Layout>
      <div className="flex flex-col justify-center items-center w-full my-5">
        <div className="flex w-1/2 max-w-sm items-center space-x-2">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => handleChange(e.target.value)}
            />
            <Button variant="ghost" type="submit">
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 p-6">
        {pokemonList.filter((pokemon) => {
          return search.toLowerCase() === ""
            ? pokemon
            : pokemon.name.toLowerCase().includes(search.toLowerCase());
        }).length === 0 ? (
          <div className="place-self-stretch">
            <p>No Pokémon found. Check the next page</p>
          </div>
        ) : (
          pokemonList
            .filter((pokemon) => {
              return search.toLowerCase() === ""
                ? pokemon
                : pokemon.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((pokemon) => (
              <Link to={`/pokemon-details/${pokemon.name}`} key={pokemon.name}>
                <PokemonCard
                  pokemon={pokemon}
                  image_url={setImageURL(pokemon.url)}
                />
              </Link>
            ))
        )}
      </div>
      <Pagination
        gotoNextPage={nextPageURL ? gotoNextPage : null}
        gotoPreviousPage={previousPageURL ? gotoPreviousPage : null}
      />
    </Layout>
  );
};

export default Homepage;
