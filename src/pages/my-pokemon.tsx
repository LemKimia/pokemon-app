import Layout from "@/components/layout";
import MyPokemonCard from "@/components/my-pokemon-card";

import { IDetail } from "@/utils/types/type";
import { useEffect, useState } from "react";


const MyPokemon = () => {
  const [myPokemonList, setMyPokemonList] = useState<IDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const caughtPokemon = JSON.parse(localStorage.getItem("myPokemons") || "[]");
    setMyPokemonList(caughtPokemon);
    setLoading(false);
  }, []);

   if (loading) return "Loading ...";

  return (
    <Layout>
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-3 p-6">
        {myPokemonList.map((pokemon) => (
          <MyPokemonCard
            key={pokemon.alias}
            pokemon={pokemon}
            image_url={pokemon.sprites.other?.dream_world.front_default}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyPokemon;
