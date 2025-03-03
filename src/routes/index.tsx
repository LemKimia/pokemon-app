import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CatchPokemon from "@/pages/catch-pokemon.tsx";
import MyPokemon from "@/pages/my-pokemon";
import HomePageContainer from "@/container/HomePageContainer.tsx";
import PokemonDetailsContainer from "@/container/PokemonDetailsContainer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageContainer />,
    loader: () => {
      return "Minidex - Your Mini Pokédex";
    },
  },
  {
    path: "/pokemon-details/:name",
    element: <PokemonDetailsContainer />,
    loader: () => {
      return "Pokemon Detail - Minidex";
    },
  },
  {
    path: "/pokemon-catch/:name",
    element: <CatchPokemon />,
    loader: () => {
      return "CatchPokemon 'em All - Minidex";
    },
  },
  {
    path: "/my-pokemon",
    element: <MyPokemon />,
    loader: () => {
      return "My Pokemon - Minidex";
    },
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
