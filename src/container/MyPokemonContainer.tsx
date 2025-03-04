import MyPokemon from "@/pages/my-pokemon.tsx";
import { usePokemonStore } from "@/utils/store.ts";

const MyPokemonContainer = () => {
  const capturedPokemon = usePokemonStore((state) => state.capturedPokemon);

  return <MyPokemon myPokemonList={capturedPokemon} />;
};

export default MyPokemonContainer;
