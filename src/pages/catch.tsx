import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { getPokemonDetails } from "@/utils/api-list/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { IDetail } from "@/utils/types/type";

const Catch = () => {
  const [counter, setCounter] = useState(0);
  const { id } = useParams<{ id: string }>();
  //const [pokemonDetail, setPokemonDetail] = useState<IPokemon[]>([]);const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);
  const [pokemonDetail, setPokemonDetail] = useState<IDetail[]>([]);

  const catchPokemon = (pokemonIdOrName: string) => {
    try {
      if (Math.random() < 0.5) {
        setCounter((prevCounter) => prevCounter + 1);
        localStorage.setItem(`pokemon${counter + 1}`, "Captured");
        console.log(`Caught Pokemon: ${pokemonIdOrName}`);
        toast("You caught one!");
      } else {
        console.log("You missed! Womp Womp");
        toast("You missed! Womp Womp");
      }
    } catch (error) {
      toast.error("Womp Womp");
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await getPokemonDetails(url);
        setPokemonDetail([response]);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    }

    fetchData();
  }, []);

  // useEffect(() => {

  //   if (pokemonList.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * pokemonList.length);
  //     setSelectedPokemon(pokemonList[randomIndex]);
  //   }
  // }, [pokemonList]);

  const setImageURL = (id: string) => {
    const newLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return newLink;
  };

  return (
    <div>
      {pokemonDetail.map((pokemonDetail) => (
        <Layout>
          <div>{pokemonDetail && <img src={setImageURL(id)} alt="" />}</div>
          <div className="grid justify-center">
            <Button
              className="self-center"
              onClick={() => catchPokemon(pokemonDetail.name)}
            >
              Catch Pokemon
            </Button>
          </div>
        </Layout>
      ))}
    </div>
  );
};

export default Catch;
