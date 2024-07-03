import React, { useState } from "react";
import logo from "../../Pitchers/logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Nvabar() {
  const [isMemuOpen, setIsMenuOpen] = useState(false);
  const togegleMemu = () => {
    setIsMenuOpen(!isMemuOpen);
  };
  return (
    <div className="flex relative justify-between items-center h-[18vh] px-8">
      <div className="logoSection flex flex-col items-center  ">
        <img src={logo} alt="Logo" className="w-[75%] h-18" />
        <h2 className="font-semibold text-2xl text-gray-500">
          Bharat Mechanical Solutions
        </h2>
      </div>
      <div className="flex lg:hidden">
        <button onClick={togegleMemu}>
          {isMemuOpen ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
      </div>
      {/* <div
        className={`${
          isMemuOpen ? "flex" : "hidden"
        } flex-col gap-4 font-semibold text-lg lg:flex lg:flex-row`}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/resources">Resources</Link>
        <Link>Events</Link>
        <Link to="/contact">Contact</Link>
      </div> */}
      {isMemuOpen && (
        <div className="fixed top-[18vh] right-0  flex items-center justify-center w-1/2 h-full bg-black text-white text-3xl  z-50">
          {/* <button
            onClick={togegleMemu}
            className="absolute top-4 right-4 text-white"
          >
            <FontAwesomeIcon icon={faTimes} size="2x" className="text-white" />
          </button> */}
          <div className="flex flex-col items-center justify-center gap-8">
            <Link to="/" onClick={togegleMemu} className="mb-4">
              Home
            </Link>
            <Link to="/about" onClick={togegleMemu} className="mb-4">
              About
            </Link>
            <Link to="/products" onClick={togegleMemu} className="mb-4">
              Products
            </Link>
            <Link to="/resources" onClick={togegleMemu} className="mb-4">
              Resources
            </Link>
            <Link to="/events" onClick={togegleMemu} className="mb-4">
              Events
            </Link>
            <Link to="/contact" onClick={togegleMemu} className="mb-4">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
