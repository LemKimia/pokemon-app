import { useEffect, useState } from "react";
import { IDetail } from "@/utils/types/type.ts";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "@/utils/api-list/api.ts";
import { toast } from "sonner";
import PokemonDetails from "@/pages/details.tsx";

const PokemonDetailsContainer = () => {
  const [pokemonDetail, setPokemonDetail] = useState<IDetail>();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await getPokemonDetails(params.name!);

        setLoading(false);
        setPokemonDetail(response);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    }

    fetchData();
  }, [params.name!]);

  if (loading) return "Loading ...";
  return <PokemonDetails pokemonDetail={pokemonDetail!} name={params.name!} />;
};

export default PokemonDetailsContainer;
