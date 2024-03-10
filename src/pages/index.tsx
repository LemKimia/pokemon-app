import Layout from "@/components/layout";
import PokemonCard from "@/components/pokemon-card";
import { getPokemon } from "@/utils/api-list/api";
import { IPokemon } from "@/utils/types/type";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemon();
        setPokemonList(response.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export default Homepage;
