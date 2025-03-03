import Layout from "@/components/layout";
import CatchDialog from "@/components/catch-dialog";
import { Link } from "react-router-dom";
import { IDetail } from "@/utils/types/type";

type CatchPokemonProps = {
  pokemonDetail?: IDetail;
  pokemonImage: string;
  catchPokemon: (name: string | undefined) => void;
  showDialog: boolean;
  setAlias: (alias: string) => void;
  submitCaughtPokemon: () => void;
};

const CatchPokemon = ({
  catchPokemon,
  pokemonImage,
  pokemonDetail,
  submitCaughtPokemon,
  setAlias,
  showDialog,
}: CatchPokemonProps) => {
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

export default CatchPokemon;
