import MyPokemon from "@/pages/my-pokemon.tsx";
import { useEffect, useState } from "react";
import { IDetail } from "@/utils/types/type.ts";

const MyPokemonContainer = () => {
  const [myPokemonList, setMyPokemonList] = useState<IDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const caughtPokemon = JSON.parse(
      localStorage.getItem("myPokemons") || "[]",
    );
    setMyPokemonList(caughtPokemon);
    setLoading(false);
  }, []);

  if (loading) return "Loading ...";

  return <MyPokemon myPokemonList={myPokemonList} />;
};

export default MyPokemonContainer;
