import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import CatchDialog from "@/components/catch-dialog";
import { getPokemonDetails } from "@/utils/api-list/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { IDetail } from "@/utils/types/type";



const Catch = () => {
  const params = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<IDetail>();
  const [showDialog, setShowDialog] = useState(false);
   const [alias, setAlias] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getPokemonDetails(params.name!);

        setPokemonDetail(response);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    }

    fetchData();
  }, []);

  const catchPokemon = (name: string | undefined) => {
    if (Math.random() < 0.5) {
      toast(`You Caught ${name} !`);
      setShowDialog(true);
    } else {
      toast("You missed! Womp Womp");
    }
  };

  const submitCaughtPokemon = () => {
    const getFromLocal = JSON.parse(localStorage.getItem("myPokemons") || "[]");
    const searchDupe = getFromLocal.find((x) => x.alias === alias);

    if (searchDupe) {
      alert(`Alias ${alias} is already exist!`);
    } else {
      const dupe = { ...pokemonDetail, alias };
      getFromLocal.push(dupe);
      localStorage.setItem("myPokemons", JSON.stringify(getFromLocal));

      setShowDialog(false);
    }
  };


  return (
    <Layout>
      <div className="grid justify-center">
        <Button
          className="self-center"
          onClick={() => catchPokemon(pokemonDetail?.name)}
        >
          Catch Pokemon
        </Button>
      </div>
      <CatchDialog show={showDialog}>
        <div className="mb-5">
          <p className="text-center font-arcade text-xs font-bold tracking-wide text-neutral-800 dark:text-white">
            Congratulation!
          </p>
          <p className="text-center font-arcade text-xs font-bold tracking-wide text-neutral-800 dark:text-white">
            You Caught {pokemonDetail?.name}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <label className="block">
            <span className="block font-arcade text-sm font-medium text-neutral-800 dark:text-white">
              Nickname
            </span>
            <input
              className="block w-full rounded-md border border-slate-300 bg-white py-2 px-3 font-arcade text-xs shadow-sm placeholder:italic focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              type="text"
              onChange={(e) => setAlias(e.target.value)}
            />
          </label>
          <button
            className="mt-4 rounded-xl border p-3 text-center font-arcade text-xs tracking-wide text-neutral-800 dark:text-white"
            onClick={() => submitCaughtPokemon()}
          >
            Submit
          </button>
        </div>
      </CatchDialog>
    </Layout>
  );
};

export default Catch;
