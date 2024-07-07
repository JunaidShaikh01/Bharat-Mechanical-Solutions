import React from "react";
import Nvabar from "../Navbar/Navbar";

import banner from "../../Pitchers/contact-usMainBanner.jpg";
import logo from "../../Pitchers/logoBg.png";
import image1 from "../../Pitchers/contact-usBanner.jpg";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
  const email = "bharat.mechsolutions@gmail.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  return (
    <div>
      <Nvabar />
      <div className="contactSection ">
        <div className="bannerSection h-[55vh] sm:h-[82vh] relative ">
          <img
            src={banner}
            alt="banner"
            className="h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <h1 className="text-white text-5xl  font-thin z-70 cursor-pointer">
              Contact Us{" "}
            </h1>
          </div>
        </div>
        <div className="mt-4 px-6 md:10 lg:px-16">
          <div>
            <h1 className="border-b-2 border-black pb-2 text-2xl ">
              Contact Us
            </h1>
          </div>
          <div className="flex  flex-col min-w-full justify-center items-center gap-4 mt-4 mb-4 relative">
            <img
              src={logo}
              alt="Bharat Logo"
              className="w-[70%] md:w-[30%] h-13"
            />
            <div className="relative w-full h-[30vh] ">
              <img
                src={image1}
                alt="Machine logo"
                className="object-cover w-full h-full rounded-lg shadow-lg "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <h1 className="text-white text-3xl font-bold z-50 text-center">
                  BHARAT MECHANICAL SOLUTIONS
                </h1>
              </div>
            </div>
          </div>
          <div className="contactUsLogo flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between mt-8 mb-8 px-10 ">
            <div className="flex items-center flex-col gap-2">
              <div className="bg-black h-20 w-20 text-white rounded-full flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faLocationDot} className="text-3xl" />
              </div>
              <h1 className="text-2xl font-semibold text-center">Visit Us</h1>
              <h1 className="text-xl">Sharjah, U.A.E</h1>
            </div>
            <div className="flex items-center flex-col gap-2">
              <div className="bg-black h-20 w-20 text-white rounded-full flex items-center justify-center shadow-xl">
                <FontAwesomeIcon icon={faPhone} className="text-3xl" />
              </div>
              <h1 className="text-2xl font-semibold text-center">Call us</h1>
              <h1 className="text-xl">+971561770937</h1>
            </div>
            <div className="flex items-center flex-col gap-2 ">
              <div className="bg-black h-20 w-20 text-white rounded-full flex items-center justify-center shadow-xl">
                <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
              </div>
              <h1 className="text-2xl font-semibold text-center">Mail Us</h1>

              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-lg lg:text-xl"
              >
                <p>bharat.mechsolutions@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
