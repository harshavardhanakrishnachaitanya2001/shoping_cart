import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stationary from "./routes/Stationary";
import Cloths from "./routes/Cloths";
import Food from "./routes/Food";
import Gadgets from "./routes/Gadgets";
import Kids from "./routes/Kids";
import App from "./App";
import HomeProducts from "./routes/HomeProducts";
import ErrorPage from "./components/ErrorPage";
import Category from './routes/Category'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />
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
    children: [
      {
        path: "/cloths/:id",
        element: <Category />,
      },
    ]
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/play",
    element: <Kids />,
  },
  {
    path: "/gadgets",
    element: <Gadgets />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
