import React from "react";
import Nvabar from "../Navbar/Navbar";
import Sliders from "../Sliders/Sliders";
import Footer from "../Footer/Footer";
import OurStrength from "./OurStrength";
import OurCustomer from "./OurCustomer";
import OurProducts from "./OurProducts";
import AboutUs from "./AboutUs";

export default function Frontpage() {
  return (
    <div>
      <Nvabar />
      <Sliders />
      <OurProducts />
      <AboutUs />
      <OurStrength />
      <Footer />
    </div>
  );
}
