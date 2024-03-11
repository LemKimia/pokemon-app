import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { getPokemon, getPokemonDetails } from "@/utils/api-list/api";
import { IDetail } from "@/utils/types/type";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import PokemonDetail from "@/components/pokemon-details";

const Details = () => {
  const [pokemonDetail, setPokemonDetail] = useState<IDetail[]>([]);
  const { idOrName } = useParams<{ idOrName: string }>();

  useEffect(() => {
    async function fetchData() {
      try {
        const pokemonList = await getPokemon();
        const response = await getPokemonDetails(pokemonList.results[0].url!);
        setPokemonDetail([response]);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    }

    fetchData();
  }, [idOrName]);



  return (
    <Layout>
      {pokemonDetail.map((pokemonDetail) => (
        <PokemonDetail
          key={pokemonDetail.name}
          pokemonDetails={pokemonDetail}
        />
      ))}
    </Layout>
  );
};

export default Details;
