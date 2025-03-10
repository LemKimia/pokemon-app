import Layout from "@/components/layout";
import CustomPagination from "@/components/customPagination.tsx";
import PokemonCard from "@/components/pokemon-card";
import { IPokemon } from "@/utils/types/results";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

type HomepageProps = {
  pokemonList: IPokemon[];
  nextPageURL: string | null;
  previousPageURL: string;
  gotoNextPage: () => void;
  gotoPreviousPage: () => void;
  setImageURL: (url: string) => string;
  handleSearchPokemon: (value: string) => void;
  searchPokemon: string;
  errorFetchingPokemon: boolean;
};

const Homepage = ({
  pokemonList,
  gotoPreviousPage,
  previousPageURL,
  nextPageURL,
  gotoNextPage,
  setImageURL,
  handleSearchPokemon,
  searchPokemon,
  errorFetchingPokemon,
}: HomepageProps) => {
  return (
    <Layout>
      <div className="flex justify-center w-full my-5">
        <Input
          className="w-1/2 rounded-2 border-3 border-black shadow-sm shadow-black "
          type="search"
          placeholder="Find your pokemon..."
          value={searchPokemon}
          onChange={(search) => handleSearchPokemon(search.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-3 p-6">
        {errorFetchingPokemon ? (
          <p>Failed to fetch Pokémon</p>
        ) : (
          <>
            {pokemonList.filter((pokemon) => {
              return searchPokemon.toLowerCase() === ""
                ? pokemon
                : pokemon.name
                    .toLowerCase()
                    .includes(searchPokemon.toLowerCase());
            }).length === 0 ? (
              <div className="place-self-stretch">
                <p>No Pokémon found. Check the next page</p>
              </div>
            ) : (
              pokemonList
                .filter((pokemon) => {
                  return searchPokemon.toLowerCase() === ""
                    ? pokemon
                    : pokemon.name
                        .toLowerCase()
                        .includes(searchPokemon.toLowerCase());
                })
                .map((pokemon) => (
                  <Link
                    to={`/pokemon-details/${pokemon.name}`}
                    key={pokemon.name}
                  >
                    <PokemonCard
                      pokemon={pokemon}
                      image_url={setImageURL(pokemon.url)}
                    />
                  </Link>
                ))
            )}
          </>
        )}
      </div>
      <CustomPagination
        gotoNextPage={nextPageURL ? gotoNextPage : null}
        gotoPreviousPage={previousPageURL ? gotoPreviousPage : null}
      />
    </Layout>
  );
};

export default Homepage;
