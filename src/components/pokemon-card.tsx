import { IPokemon } from "@/utils/types/results";

import { Link } from "react-router-dom";

interface Props {
  pokemon: IPokemon;
  image_url: string;
}

const PokemonCard = (props: Props) => {
  const { pokemon, image_url } = props;

  return (
    <div className="flex h-full flex-col rounded-2xl border-4 border-black shadow-lg shadow-black">
      <div className="flex h-full flex-col ">
        <div className="flex h-full w-full items-center justify-center">
          <Link to={`/pokemon-details/${pokemon.name}`}>
            <img
              src={image_url}
              alt={pokemon.name}
            />
          </Link>
        </div>
        <div className="w-full">
          <p className="rounded-b-lg bg-black py-2 text-center font-arcade text-xs font-bold uppercase tracking-widest text-white dark:rounded-b-xl">
            {pokemon.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
