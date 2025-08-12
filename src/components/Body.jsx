import React, { Suspense, lazy } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shimmer from "./Shimmer"
const Body = () => {
  const MoviePlayer = lazy(() => import("./MoviePlayer"));
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:movieId",
      element: (
        <Suspense
          fallback={<Shimmer/>}
        >
          <MoviePlayer />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
