import React from "react";
import logo from "../../Pitchers/logo.jpg";
import { Link } from "react-router-dom";

export default function Nvabar() {
  return (
    <div className="flex justify-between items-center h-[18vh] px-8">
      <div className="logoSection flex flex-col items-center  ">
        <img src={logo} alt="Logo" className="w-[75%] h-18" />
        <h2 className="font-semibold text-2xl ">Bharat Mechanical Solutions</h2>
      </div>
      <div className="flex gap-4 font-semibold text-lg">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/resources">Resources</Link>
        <Link>Events</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
