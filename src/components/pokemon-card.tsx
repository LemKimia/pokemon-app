import { Card, CardContent } from "@/components/ui/card";
import { IPokemon } from "@/utils/types/results";
import { Link } from "react-router-dom";

interface Props {
  pokemon: IPokemon;
  image_url: string
}

const PokemonCard = (props: Props) => {
  const { pokemon, image_url } = props;

  return (
    <Card className="flex h-full flex-col rounded-2xl border-4 border-black shadow-lg shadow-black dark:border-white">
      <CardContent className="flex h-full flex-col items-center justify-between p-0">
        <Link to={`/pokemon-details/${pokemon.name}`}>
          <img src={image_url} alt={pokemon.name} />
        </Link>
        <p className="w-full rounded-b-lg bg-black py-2 text-center font-arcade text-xs font-bold uppercase tracking-widest text-white dark:rounded-b-xl">
          {pokemon.name}
        </p>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
