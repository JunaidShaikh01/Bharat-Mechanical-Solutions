import React, { useState } from "react";
import logo from "../../Pitchers/logo.jpg";
import logobg from "../../Pitchers/logoBg.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faTimesRectangle,
} from "@fortawesome/free-solid-svg-icons";

export default function Nvabar() {
  const [isMemuOpen, setIsMenuOpen] = useState(false);
  const togegleMemu = () => {
    setIsMenuOpen(!isMemuOpen);
  };
  return (
    <div className="flex relative justify-between items-center  h-[18vh] px-8">
      <div className="logoSection flex flex-col  items-start ">
        <img src={logobg} alt="Logo" className="w-[75%] h-18" />
        <h2 className="font-semibold text-xl lg:text-2xl  text-gray-500 ml-2 sm:ml-4">
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
      <div
        className={`${
          isMemuOpen ? "hidden" : "hidden lg:flex"
        }  gap-6 font-semibold text-xl `} /* Updated */
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/resources">Resources</Link>

        <Link to="/contact">Contact</Link>
      </div>
      {isMemuOpen && (
        <div className="fixed top-0 right-0   w-full  h-full bg-black   text-white text-3xl  z-50">
          <div className="flex justify-between items-center h-[18vh] mt-4 px-8">
            <div className="w-[70%]">
              <img src={logobg} alt="logo" srcset="" />
            </div>
            <button onClick={togegleMemu} className=" text-white">
              <FontAwesomeIcon
                icon={faTimes}
                className="text-white"
                size="2x"
              />
            </button>
          </div>

          <div className="flex w-full h-[60%] justify-center items-center">
            <div className="flex  flex-col  gap-4 mb-8">
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

              <Link to="/contact" onClick={togegleMemu} className="mb-4">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
