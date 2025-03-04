import { IPokemon } from "@/utils/types/results";

type PokemonCardProps = {
  pokemon: IPokemon;
  image_url: string;
};

const PokemonCard = ({ pokemon, image_url }: PokemonCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border-4 border-black shadow-lg shadow-black">
      <div className="flex h-full flex-col ">
        <div className="flex h-full w-full items-center justify-center">
          <img src={image_url} alt={pokemon.name} />
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
