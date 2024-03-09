import { Card, CardContent } from "@/components/ui/card";

const PokemonCard = () => {
  return (
    <Card className="flex h-full flex-col rounded-2xl border-4 border-black shadow-lg shadow-black dark:border-white">
      <CardContent className="flex h-full flex-col items-center justify-between p-0">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="pokemon-sprites"
        />
        <p className="w-full rounded-b-lg bg-black py-2 text-center font-arcade text-xs font-bold uppercase tracking-widest text-white dark:rounded-b-xl">
          Name
        </p>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
