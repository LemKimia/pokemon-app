import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";
import PokemonDetails from "@/pages/pokemon-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pokemon-details",
    element: <PokemonDetails />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
