import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stationary from "./routes/Stationary";
import Cloths from "./routes/Cloths";
import Food from "./routes/Food";
import Work from "./routes/Work";
import Kids from "./routes/Kids";
import App from "./App";
import HomeProducts from "./routes/HomeProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomeProducts />,
  },
  {
    path: "/stationary",
    element: <Stationary />,
  },
  {
    path: "/cloths",
    element: <Cloths />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/play",
    element: <Kids />,
  },
  {
    path:"cloths/:id",
    element : <div></div>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
