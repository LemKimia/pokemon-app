import Layout from "@/components/layout";
import Pagination from "@/components/pagination";
import PokemonCard from "@/components/pokemon-card";
import { IPokemon } from "@/utils/types/results";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type HomepageProps = {
  pokemonList: IPokemon[];
  nextPageURL: string;
  previousPageURL: string;
  gotoNextPage: () => void;
  gotoPreviousPage: () => void;
  setImageURL: (url: string) => string;
  handleChange: (value: string) => void;
  search: string;
};

const Homepage = ({
  pokemonList,
  gotoPreviousPage,
  previousPageURL,
  nextPageURL,
  gotoNextPage,
  setImageURL,
  handleChange,
  search,
}: HomepageProps) => {
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
