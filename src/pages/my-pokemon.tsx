import Layout from "@/components/layout";
import PokemonCard from "@/components/pokemon-card";
import { getPokemon } from "@/utils/api-list/api";
import { IPokemon } from "@/utils/types/results";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const MyPokemon = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemon();
        setPokemonList(response.results);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    };

    fetchData();
  }, []);

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
    </Layout>
  );
};

export default MyPokemon;
