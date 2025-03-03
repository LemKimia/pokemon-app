import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePageContainer from "@/container/HomePageContainer.tsx";
import MyPokemonContainer from "@/container/MyPokemonContainer.tsx";
import CatchPokemonContainer from "@/container/CatchPokemonContainer.tsx";
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
    element: <CatchPokemonContainer />,
    loader: () => {
      return "CatchPokemon 'em All - Minidex";
    },
  },
  {
    path: "/my-pokemon",
    element: <MyPokemonContainer />,
    loader: () => {
      return "My Pokemon - Minidex";
    },
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
