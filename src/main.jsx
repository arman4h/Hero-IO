import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Layout from "./Layout/Layout";
import Apps from "./Pages/Apps";
import Library from "./Pages/Library";
import Home from "./Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />, // default "/"
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/library",
        element: <Library />,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
