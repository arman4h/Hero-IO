import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout";
import Apps from "./Pages/Apps";
import Library from "./Pages/Library";
import Home from "./Pages/Home";
import AppDetails from "./Pages/AppDetails";
import ErrorPage from "./Pages/ErrorPage";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./context/AppContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
      {
        path: "apps/:id",
        element: <AppDetails />,
      },
      {
        path: "installation",
        element: <Library />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
