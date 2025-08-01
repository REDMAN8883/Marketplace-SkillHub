import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />, // Principal
        children: [
            {
                index: true, // Equivale al path 
                element: <Landing />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register", 
                element: <Register />
            }

            // Faltan rutas...
        ]
    },
]);
