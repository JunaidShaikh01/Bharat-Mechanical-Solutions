import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Pitchers/logoBg.png";
import { Link } from "react-router-dom";
export default function Footer() {
  const email = "bharat.mechsolutions@gmail.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  return (
    <div className="bg-black  ">
      <div className=" flex flex-col lg:flex-row items-center gap-10 justify-evenly py-8   ">
        <div className="Contact text-[#b5b5b5] flex flex-col items-center  gap-2 border-b-2 border-gray-600 lg:border-none w-[70%] lg:w-[25%]">
          <h1 className=" text-xl cursor-pointer text-white hover:text-[#df6553]">
            <Link to="/contact">Contact</Link>
          </h1>

          <p className="text-lg">Sharjah, U.A.E</p>
          <div className="flex items-center gap-2 hover:text-white transform duration-300 ease-in-out ">
            <FontAwesomeIcon icon={faEnvelope} />

            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center flex"
            >
              Email Us
            </a>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon icon={faPhone} />
            <p>+971561770937</p>
          </div>
        </div>

        <div className="About  text-[#b5b5b5] flex items-center flex-col gap-2 border-b-2 border-gray-600 lg:border-none w-[70%]  lg:w-[25%] ">
          <h1 className="mb-2 text-xl cursor-pointer text-white hover:text-[#df6553]">
            <Link to="/about">About</Link>
          </h1>
          <p className="cursor-pointer hover:text-white">Our Values</p>
          <p className="cursor-pointer hover:text-white mb-4">Careers</p>
        </div>

        <div className="products text-[#b5b5b5] flex flex-col items-center gap-2 border-b-2 border-gray-600 lg:border-none w-[70%]  lg:w-[25%]">
          <h1 className=" text-xl cursor-pointer text-white hover:text-[#df6553]">
            <Link to="/products">Products</Link>
          </h1>
          <p className="cursor-pointer hover:text-white text-center">
            Indexible Cutting Tools
          </p>
          <p className="cursor-pointer hover:text-white text-center">
            Solid Round Cutting Tools
          </p>
          <p className="cursor-pointer hover:text-white mb-4 text-center">
            Printed Circuit Board Cutting Tools
          </p>
        </div>
      </div>
      <div className="text-white flex flex-col items-center justify-center w-full">
        <img
          src={logo}
          alt="Logo"
          className="mb-4 h-15 w-[70%] md:w-[40%] lg:w-[15%]"
        />
        <div className="flex items-start  justify-center lg:items-center  space-x-2">
          <FontAwesomeIcon icon={faCopyright} className=" bg-black" />
          <div className="flex flex-col items-center lg:flex-row">
            <p>Bharat Mechanical Solution |</p>{" "}
            <p className="ml-1"> All rights reserved.</p>
          </div>
        </div>
        <div className="mt-2 mb-4 ">
          <p className=" flex gap-2 ">
            Developed By Juanid |{" "}
            <a
              href="https://www.linkedin.com/in/junaid-shaikh01/"
              target="_blank"
              className="hover:text-[#b5b5b5] cursor-pointer"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://x.com/Junaid__046"
              target="_blank"
              className="hover:text-[#b5b5b5] cursor-pointer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
