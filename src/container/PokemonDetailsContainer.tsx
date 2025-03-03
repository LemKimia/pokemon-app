import { useEffect, useState } from "react";
import { IDetail } from "@/utils/types/type.ts";
import { useParams } from "react-router-dom";
import PokemonDetails from "@/pages/pokemon-details.tsx";
import { usePokemonDetails } from "@/utils/api-list/query.ts";

const PokemonDetailsContainer = () => {
  const [pokemonDetail, setPokemonDetail] = useState<IDetail>();
  const params = useParams();

  const { data: pokemonDetails, isPending: isFetchingDetails } =
    usePokemonDetails(params.name || "");

  useEffect(() => {
    if (pokemonDetails) {
      setPokemonDetail(pokemonDetails);
    }
  }, [pokemonDetails]);

  if (isFetchingDetails) return "Loading ...";
  return <PokemonDetails pokemonDetail={pokemonDetail!} name={params.name!} />;
};

export default PokemonDetailsContainer;
