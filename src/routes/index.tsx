import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Details from "@/pages/details";
import Catch from "@/pages/catch";
import MyPokemon from "@/pages/my-pokemon";
import HomePageContainer from "@/container/HomePageContainer.tsx";

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
    element: <Details />,
    loader: () => {
      return "Pokemon Detail - Minidex";
    },
  },
  {
    path: "/pokemon-catch/:name",
    element: <Catch />,
    loader: () => {
      return "Catch 'em All - Minidex";
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
