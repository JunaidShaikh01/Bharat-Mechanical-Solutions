import React from "react";
import Nvabar from "../Navbar/Navbar";

import banner from "../../Pitchers/AboutBanner.jpg";
import img1 from "../../Pitchers/About-1.jpg";
import img2 from "../../Pitchers/About-2.jpeg";
import img3 from "../../Pitchers/About-3.jpeg";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <div>
      <Nvabar />
      <div className="aboutSection flex flex-col gap-4">
        <div className="bannerSection h-[80vh] relative ">
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

        <div className="flex  px-[10rem] mt-8 gap-3">
          <div className="image w-[50%] ">
            <img
              src={img1}
              alt="About Section"
              srcset=""
              className="w-full h-[70vh] object-cover shadow-xl"
            />
          </div>
          <div className="text w-[50%] flex items-center justify-center px-4">
            <p>
              Bharat Mechanical Solutions FZE is a leading company in the Middle
              East, providing top quality industrial tools and solutions to
              various industries. Our company takes immense pride in being the
              authorized distributor of KYOCERA cutting tools in the region
            </p>
          </div>
        </div>

        <div className="flex  px-[10rem] mt-8 gap-3 ">
          <div className="text w-[50%] flex items-center justify-center px-4">
            <p>
              At Bharat Mechanical Solutions FZE, we take pride in our
              commitment to constantly expand our range of services and products
              to meet the ever-evolving needs of our esteemed clients. We are
              driven by our passion for excellence and our mission to provide
              innovative solutions that drive growth and productivity
            </p>
          </div>
          <div className="image w-[50%] ">
            <img
              src={img2}
              alt="About Section"
              srcset=""
              className="w-full h-[70vh] object-cover shadow-xl"
            />
          </div>
        </div>

        <div className="flex  px-[10rem] mt-8 gap-3 mb-8">
          <div className="image w-[50%] ">
            <img
              src={img3}
              alt="About Section"
              srcset=""
              className="w-full h-[70vh] object-cover shadow-xl"
            />
          </div>
          <div className="text w-[50%] flex items-center justify-center px-4">
            <p>
              At Bharat Mechanical Solutions FZE, we take pride in our
              commitment to constantly expand our range of services and products
              to meet the ever-evolving needs of our esteemed clients. We are
              driven by our passion for excellence and our mission to provide
              innovative solutions that drive growth and productivity
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
