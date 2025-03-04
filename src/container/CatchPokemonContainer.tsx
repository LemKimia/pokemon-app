import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePokemonStore } from "@/utils/store.ts";
import CatchPokemon from "@/pages/catch-pokemon.tsx";

const CatchPokemonContainer = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  const pokemonDetails = usePokemonStore((state) => state.pokemonDetails);
  const capturedPokemon = usePokemonStore((state) => state.capturedPokemon);
  const addCapturedPokemon = usePokemonStore(
    (state) => state.addCapturedPokemon,
  );

  const pokemonImageUrl =
    pokemonDetails.sprites.other?.dream_world.front_default;

  const catchPokemon = (name: string | undefined) => {
    const isExist = capturedPokemon.find((x) => x.nickname === nickname);
    if (isExist) {
      alert(`Alias ${nickname} is already exist!`);
      return;
    }

    if (Math.random() < 0.5) {
      toast(`You Caught ${name} !`);
      setShowDialog(true);
    } else {
      toast("You missed!");
    }
  };

  const submitCaughtPokemon = () => {
    addCapturedPokemon(nickname, pokemonDetails);
    setShowDialog(false);
    navigate("/");
  };

  return (
    <CatchPokemon
      catchPokemon={catchPokemon}
      pokemonDetail={pokemonDetails}
      pokemonImage={pokemonImageUrl}
      setAlias={setNickname}
      submitCaughtPokemon={submitCaughtPokemon}
      showDialog={showDialog}
    />
  );
};

export default CatchPokemonContainer;
