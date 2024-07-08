import React from "react";
import Nvabar from "../Navbar/Navbar";

import banner from "../../Pitchers/AboutBanner.jpg";
import img1 from "../../Pitchers/About-1.jpg";
import img2 from "../../Pitchers/About-2.jpeg";
import img3 from "../../Pitchers/About-3.jpeg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Nvabar />
      <div className="aboutSection flex flex-col gap-4">
        <div className="bannerSection h-[55vh] sm:h-[82vh] relative ">
          <img
            src={banner}
            alt="banner"
            className="h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <h1 className="text-white text-5xl  font-thin z-70 cursor-pointer">
              About Us{" "}
            </h1>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row px-8  md:px-3 lg:px-[10rem] mt-8 gap-5 md:gap-3">
          <div className="image w-full md:w-[50%] relative group">
            <img
              src={img1}
              alt="About Section"
              srcset=""
              className="w-full h-[70vh]  shadow-xl"
            />
            <Link to="/products">
              <button className="absolute inset-0 opacity-0 group-hover:opacity-80 bg-black bg-opacity-70 text-white text-xl items-center justify-center transition-opacity duration-500 ease-in-out border ">
                {" "}
                Go to Products
              </button>
            </Link>
          </div>
          <div className="text w-full md:w-[50%] flex items-center justify-center px-4 font-rajdhani">
            <p className="text-center drop-shadow-xl text-2xl">
              Bharat Mechanical Solutions FZE is a leading company in the Middle
              East, providing top quality industrial tools and solutions to
              various industries. Our company takes immense pride in being the
              authorized distributor of KYOCERA cutting tools in the region.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row px-8 md:px-3 lg:px-[10rem] mt-8 gap-5 md:gap-3 ">
          <div className="text w-full md:w-[50%] flex items-center justify-center px-4 font-rajdhani">
            <p className="text-center drop-shadow-xl text-2xl">
              At Bharat Mechanical Solutions FZE, we take pride in our
              commitment to constantly expand our range of services and products
              to meet the ever-evolving needs of our esteemed clients. We are
              driven by our passion for excellence and our mission to provide
              innovative solutions that drive growth and productivity
            </p>
          </div>
          <div className="image w-full md:w-[50%] relative group">
            <img
              src={img2}
              alt="About Section"
              srcset=""
              className="w-full h-[70vh]  shadow-xl"
            />
            <Link to="/products">
              <button className="absolute inset-0 opacity-0 group-hover:opacity-80 bg-black bg-opacity-70 text-white text-xl items-center justify-center transition-opacity duration-500 ease-in-out border ">
                {" "}
                Go to Products
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row px-8 md:px-3 lg:px-[10rem] mt-8 gap-5 md:gap-3 mb-8">
          <div className="image w-full md:w-[50%] relative group">
            <img
              src={img3}
              alt="About Section"
              srcset=""
              className="w-full h-[70vh]  shadow-xl"
            />
            <Link to="/products">
              <button className="absolute inset-0 opacity-0 group-hover:opacity-80 bg-black bg-opacity-70 text-white text-xl items-center justify-center transition-opacity duration-500 ease-in-out border ">
                {" "}
                Go to Products
              </button>
            </Link>
          </div>
          <div className="text w-full md:w-[50%] flex items-center justify-center  px-4 font-rajdhani">
            <p className="text-center drop-shadow-xl text-2xl mt-2 ">
              Our partnership with KYOCERA, one of the world's leading
              manufacturers of industrial cutting tools, solidifies our position
              as a provider of high-quality products. As an authorized
              distributor, we offer an extensive range of premium-grade cutting
              tools including drills, end mills, turning inserts, threading
              tools and more. These tools are designed using state-of-the-art
              technology and are known for their precision, durability and
              performance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
