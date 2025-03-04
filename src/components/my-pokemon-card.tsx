import { IDetail } from "@/utils/types/type";
import { Link } from "react-router-dom";

interface Props {
  pokemon: IDetail;
  image_url?: string;
}

const MyPokemonCard = (props: Props) => {
  const { pokemon, image_url } = props;

  return (
    <div className="flex h-full flex-col rounded-2xl border-4 border-black shadow-lg shadow-black">
      <div className="flex h-full flex-col items-center justify-between">
        <Link to={`/pokemon-details/${pokemon.name}`}>
          <div className="flex h-full w-full items-center justify-center">
            <img className="h-auto w-auto" src={image_url} alt={pokemon.name} />
          </div>
        </Link>
        <p className="w-full rounded-b-lg bg-black py-2 text-center font-arcade text-xs font-bold uppercase tracking-widest text-white dark:rounded-b-xl">
          {pokemon.name}
          {pokemon.alias && <br />}
          {pokemon.alias && `(${pokemon.alias})`}
        </p>
      </div>
    </div>
  );
};

export default MyPokemonCard;
