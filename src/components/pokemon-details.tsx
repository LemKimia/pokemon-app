import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const PokemonDetails = () => {
  return (
    <div>
      <Card className="flex flex-col rounded-2xl border-4 border-black shadow-lg shadow-black dark:border-white">
        <CardHeader>
          <CardTitle className="overflow-hidden break-all rounded-full border border-black p-2 text-center text-l capitalize tracking-wide text-black dark:border-white bg-transparent">
            Green Bro
          </CardTitle>
        </CardHeader>
        <CardContent className="flex h-full flex-col items-center justify-between p-0">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="pokemon-sprites"
          />
        </CardContent>
        <CardFooter className="grid grid-flow-row auto-rows-max grid-cols-2 gap-4">
          <p className="overflow-hidden break-all rounded-full border border-black p-2 text-center text-xs capitalize tracking-wide text-black dark:border-white bg-transparent">
            Flying
          </p>
          <p className="overflow-hidden break-all rounded-full border border-black p-2 text-center text-xs capitalize tracking-wide text-white dark:border-white bg-emerald-300">
            Water
          </p>
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
        <a className="self-center " href="">
          Catch!
        </a>
      </div>
    </div>
  );
};

export default PokemonDetails;
