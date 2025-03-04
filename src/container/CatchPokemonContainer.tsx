import CatchPokemon from "@/pages/catch-pokemon.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { usePokemonStore } from "@/utils/store.ts";

type DupeProps = {
  alias: string;
  url: string;
};

const CatchPokemonContainer = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [alias, setAlias] = useState("");
  const navigate = useNavigate();

  const pokemonDetails = usePokemonStore((state) => state.pokemonDetails);
  const pokemonImageUrl =
    pokemonDetails.sprites.other?.dream_world.front_default;

  const catchPokemon = (name: string | undefined) => {
    if (Math.random() < 0.5) {
      toast(`You Caught ${name} !`);
      setShowDialog(true);
    } else {
      toast("You missed!");
    }
  };

  const submitCaughtPokemon = () => {
    const getFromLocal = JSON.parse(localStorage.getItem("myPokemons") || "[]");
    const searchDupe = getFromLocal.find((x: DupeProps) => x.alias === alias);

    if (searchDupe) {
      alert(`Alias ${alias} is already exist!`);
    } else {
      const dupe = { ...pokemonDetails, alias };
      getFromLocal.push(dupe);
      localStorage.setItem("myPokemons", JSON.stringify(getFromLocal));

      setShowDialog(false);
      navigate("/");
      console.log(navigate);
    }
  };

  return (
    <CatchPokemon
      catchPokemon={catchPokemon}
      pokemonDetail={pokemonDetails}
      pokemonImage={pokemonImageUrl}
      setAlias={setAlias}
      submitCaughtPokemon={submitCaughtPokemon}
      showDialog={showDialog}
    />
  );
};

export default CatchPokemonContainer;
