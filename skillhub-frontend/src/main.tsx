import React from "react";
import ReactDOM from "react-dom/cliente";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Importacion de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
