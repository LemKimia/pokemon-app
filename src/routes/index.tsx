import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";
import Details from "@/pages/details";
import Catch from "@/pages/catch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pokemon-details/:idOrName",
    element: <Details />,
  },
  {
    path: "/pokemon-catch/:id",
    element: <Catch />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
