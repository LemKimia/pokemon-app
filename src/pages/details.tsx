import Layout from "@/components/layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "@/utils/api-list/api";
import { IDetail } from "@/utils/types/type";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import PokemonDetail from "@/components/pokemon-details";

const Details = () => {
  const [pokemonDetail, setPokemonDetail] = useState<IDetail[]>([]);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  
 async function fetchData() {
   try {
     const response = await getPokemonDetails(params.name!);

     setPokemonDetail(response);
   } catch (error) {
     toast((error as Error).message.toString());
   }
 }


  return (
    <Layout>
      <div>
        <Card className="flex flex-col rounded-2xl border-4 border-black shadow-lg shadow-black dark:border-white">
          <CardHeader>
            <CardTitle className="overflow-hidden break-all rounded-full border border-black p-2 text-center text-l capitalize tracking-wide text-black dark:border-white bg-transparent">
              {pokemonDetail.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex h-full flex-col items-center justify-between p-0">
            <img
              src={pokemonDetails.sprites.other?.dream_world.front_default}
              alt={pokemonDetails.name}
            />
          </CardContent>
          <CardFooter className="grid grid-flow-row auto-rows-max grid-cols-2 gap-4">
            {pokemonDetails.types.slice(0, 2).map((type, index) => (
              <p
                className="overflow-hidden break-all rounded-full border border-black p-2 text-center text-xs capitalize tracking-wide text-black dark:border-white bg-transparent"
                key={index}
              >
                {type.type.name}
              </p>
            ))}
            {pokemonDetails.types.slice(0, 2).map((type, index) => (
              <p
                className="overflow-hidden break-all rounded-full border border-black p-2 text-center text-xs capitalize tracking-wide text-black dark:border-white bg-transparent"
                key={index}
              >
                {type.type.name}
              </p>
            ))}

            {pokemonDetails.abilities.map((abilities, index) => (
              <p
                className="overflow-hidden break-all rounded-full border border-black p-2 text-center text-xs capitalize tracking-wide text-white dark:border-white bg-emerald-300"
                key={index}
              >
                {abilities.ability.name}
              </p>
            ))}
          </CardFooter>
        </Card>
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-4 mt-5">
          <Card className="flex flex-col rounded-2xl border-4 border-black shadow-lg shadow-black dark:border-white">
            <CardContent>
              <p className="text-center">Skill</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col rounded-2xl border-4 border-black shadow-lg shadow-black dark:border-white">
            <CardContent>
              <p className="text-center">More Skills</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col justify-center rounded-2xl mt-5 border-4 border-black shadow-lg shadow-black dark:border-white bg-white">
          <Link to={"/pokemon-catch"}>
            <a className="self-center " href="">
              Catch!
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
