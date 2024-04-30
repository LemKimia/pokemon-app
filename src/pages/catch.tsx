import Layout from "@/components/layout";
import CatchDialog from "@/components/catch-dialog";
import { getPokemonDetails } from "@/utils/api-list/api";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { IDetail } from "@/utils/types/type";

interface Props {
  alias: string;
  url: string;
}

const Catch = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [pokemonDetail, setPokemonDetail] = useState<IDetail>();
  const [pokemonImage, setPokemonImage] = useState("")
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
        
        setPokemonImage(response.sprites.other?.dream_world.front_default)
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
    const searchDupe = getFromLocal.find((x: Props) => x.alias === alias);

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
    <Layout>
      <div className="grid h-full w-full grid-flow-col grid-rows-2">
        <div className="grid justify-self-center">
          <div className="place-self-center p-5 rounded-2xl border border-black shadow-lg shadow-black bg-lime-700 ">
            <p className="text-center font-arcade text-s tracking-wide text-white ">
              Wild {pokemonDetail?.name} appeared!
            </p>
          </div>
          <div className="place-self-center">
            <img src={pokemonImage} alt="" />
          </div>
        </div>
        <div className="grid auto-rows-max grid-cols-2 self-end">
          <div className="rounded-2xl border border-black shadow-lg shadow-black m-3 p-5 bg-amber-500">
            <p className="text-left font-arcade text-s tracking-wide text-white">
              What will
            </p>
            <p className="text-left font-arcade text-sm tracking-wide text-white">
              you do?
            </p>
          </div>
          <div className="grid auto-rows-max grid-cols-2 rounded-2xl border border-black shadow-lg shadow-black m-3 p-5 bg-sky-500">
            <button
              className="text-left font-arcade text-s tracking-wide text-white"
              onClick={() => catchPokemon(pokemonDetail?.name)}
            >
              Catch
            </button>
            <Link
              to="/"
              className="text-left font-arcade text-s tracking-wide text-white"
            >
              Run
            </Link>
          </div>
        </div>
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
