import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Frontpage from "./Components/Frontpage/Frontpage";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Resources from "./Components/Resources/Resources";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Frontpage /> },
    { path: "/about", element: <About /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
    { path: "/resources", element: <Resources />}
  ]);
  return <RouterProvider router={router} />;
}
