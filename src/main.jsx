import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from "./Components/Nav/Home"
import AddProduct from "./Components/Nav/AddProduct";
import MyCart from "./Components/Nav/MyCart";
import Login from "./Components/Nav/Login";
import Homepage from "./Components/HomePage/Homepage";
import BrandDetails from "./Components/BrandDetails";
import Details from "./Components/Details";
import Register from "./Components/Nav/Register";
import AuthProvider from "./Components/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Update from "./Components/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element:<Homepage/>, 
      },
      {
        path: "/AddProduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/BrandDetails/:id",
        element:<BrandDetails></BrandDetails>,
        loader: ({params}) => fetch(`https://assingment-10-tasmeo.vercel.app/brands/${params.id}`)
      },
      {
        path: "/Details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://assingment-10-tasmeo.vercel.app/products/${params.id}`)
      },

      {
        path: "/MyCart",
        element:<MyCart></MyCart>,
        loader:()=>fetch(`https://assingment-10-tasmeo.vercel.app/My-Carts`)
      },
      {
        path: "/Login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/update/:id",
        element:<Update></Update>,
        loader:({params})=>fetch(`https://assingment-10-tasmeo.vercel.app/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
https://65394dc686f8ea0414965c37--serene-toffee-73ba3a.netlify.app/
https://app.netlify.com/sites/serene-toffee-73ba3a/overview