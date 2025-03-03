import CatchPokemon from "@/pages/catch-pokemon.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IDetail } from "@/utils/types/type.ts";
import { getPokemonDetails } from "@/utils/api-list/api.ts";
import { toast } from "sonner";

type DupeProps = {
  alias: string;
  url: string;
};

const CatchPokemonContainer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [pokemonDetail, setPokemonDetail] = useState<IDetail>();
  const [pokemonImage, setPokemonImage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [alias, setAlias] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await getPokemonDetails(params.name!);

        setLoading(false);
        setPokemonDetail(response);

        setPokemonImage(response.sprites.other?.dream_world.front_default);
        console.log(pokemonImage);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    }

    fetchData();
  }, [params.name, pokemonImage]);

  if (loading) return "Loading ...";

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
      const dupe = { ...pokemonDetail, alias };
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
      pokemonDetail={pokemonDetail}
      pokemonImage={pokemonImage}
      setAlias={setAlias}
      submitCaughtPokemon={submitCaughtPokemon}
      showDialog={showDialog}
    />
  );
};

export default CatchPokemonContainer;
