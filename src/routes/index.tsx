import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/pages";
import Details from "@/pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/pokemon-details/:idOrName",
    element: <Details />,
  },
]);

const app = () => {
  return <RouterProvider router={router} />;
};

export default app;
