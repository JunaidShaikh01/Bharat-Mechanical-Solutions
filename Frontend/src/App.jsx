import React from "react";
import Frontpage from "./Components/Frontpage/Frontpage";
import About from "./Components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Frontpage /> },
    { path: "/about", element: <About /> },
  ]);
  return <RouterProvider router={router} />;
}
