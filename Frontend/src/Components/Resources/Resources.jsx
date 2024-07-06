import React from "react";
import Nvabar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BmsBanner from "./bharatBanner.jpg";
import BmsBrochure from "./BmsSolutions.pdf";

export default function Resources() {
  return (
    <div>
      <Nvabar />
      <div className="">
        <img
          src={BmsBanner}
          alt-="Error While Loading the Image"
          className="w-full h-[80vh]"
        />
      </div>
      <div className=" flex flex-col justify-center items-center  px-16 mt-8 gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-semibold ">Download Our Catalogue</h1>
        </div>
        <div className="flex justify-evenly w-full items-center">
          <img
            src={BmsBanner}
            alt="Error While Loading The Image"
            className="h-[20vh] w-[20vw] shadow-2xl"
          />

          <a
            href={BmsBrochure}
            download={BmsBrochure}
            className="text-xl font-josefine px-4 bg-[#b92022] py-2 rounded-md shadow-lg text-white hover:text-zinc-800 hover:bg-[#a76667] transform duration-300 ease-in-out"
          >
            Download Pdf
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
