import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "@/pages/pokemon-details.tsx";
import { usePokemonDetails } from "@/utils/api-list/query.ts";
import { usePokemonStore } from "@/utils/store.ts";

const PokemonDetailsContainer = () => {
  const pokemonDetails = usePokemonStore((state) => state.pokemonDetails);
  const setPokemonDetails = usePokemonStore((state) => state.setPokemonDetails);

  const params = useParams();

  const {
    data: pokemonData,
    isPending: isFetchingDetails,
    status: fetchingStatus,
  } = usePokemonDetails(params.name || "");

  useEffect(() => {
    if (pokemonData && !isFetchingDetails && fetchingStatus === "success") {
      setPokemonDetails(pokemonData);
    }
  }, [pokemonData, isFetchingDetails]);

  if (isFetchingDetails) return "Loading ...";

  return <PokemonDetails pokemonDetail={pokemonDetails} name={params.name!} />;
};

export default PokemonDetailsContainer;
