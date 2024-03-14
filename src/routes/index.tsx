import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";
import Details from "@/pages/details";
import Catch from "@/pages/catch";
import MyPokemon from "@/pages/my-pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pokemon-details/:name",
    element: <Details />,
  },
  {
    path: "/pokemon-catch/:name",
    element: <Catch />,
  },
  {
    path: "/my-pokemon",
    element: <MyPokemon />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
