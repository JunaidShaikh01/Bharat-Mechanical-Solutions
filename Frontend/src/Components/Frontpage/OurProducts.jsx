import React from "react";
import product1 from "../../Pitchers/OurProducts/milling.jpg";
import product2 from "../../Pitchers/OurProducts/drilling.jpg";
import product3 from "../../Pitchers/OurProducts/turning.jpg";
import product4 from "../../Pitchers/OurProducts/smallTools.jpg";
import logo1 from "../../Pitchers/OurProducts/milling.png";
import logo2 from "../../Pitchers/OurProducts/drill.png";
import logo3 from "../../Pitchers/OurProducts/Threading.png";
import logo4 from "../../Pitchers/OurProducts/SmallTools.png";
import { useNavigate } from "react-router-dom";
export default function OurProducts() {
  //   const navigate = useNavigate();
  //   const clickHandler = () => {
  //     navigate("/products");
  //   };
  return (
    <div className="relative h-[195vh] md:h-[100vh] mt-4">
      <div className="relative h-[20vh] md:h-[30vh] bg-[#6F2B2B]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="w-full relative text-white px-8 pt-4 z-10">
          <h1 className="text-2xl">OUR PRODUCTS</h1>
          <p className="border-b-2 border-white w-[25%] sm:[15%] lg:w-[5%] mt-3"></p>
        </div>
        {/* <button onClick>View More</button> */}
      </div>

      <div className="w-[90vw] absolute top-[12vh] md:top-[20vh] gap-2 md:gap-0 left-1/2 transform -translate-x-1/2   flex flex-col md:flex-row justify-between ">
        <div className="w-full md:w-[25%]">
          <img
            src={product1}
            alt="Error Loading Image"
            className=" h-[30vh] md:h-[40vh] w-full object-cover"
          />
          <div className="h-[15vh] md:h-[30vh] bg-[#6F4F2B] flex items-center justify-center flex-row md:flex-col gap-2 md:gap-4">
            <img
              src={logo1}
              alt="Error Loading Logo"
              srcset=""
              className="h-10 md:h-20 filter-white"
            />
            <p className="text-lg md:text-2xl font-bold cursor-pointer hover:text-[#56361d]   transform duration-300 ease-in-out text-center text-white">
              Milling
            </p>
          </div>
        </div>

        <div className="w-full mb-4 shadow-xl md:shadow-none md:md-0 md:w-[25%]">
          <div className="h-[15vh] md:h-[30vh] bg-[#46382b] flex items-center justify-center flex-row md:flex-col gap-2 md:gap-4">
            <img
              src={logo2}
              alt="Error Loading Logo"
              srcset=""
              className="h-10 md:h-20 filter-white"
            />
            <p className="text-lg md:text-2xl font-bold cursor-pointer hover:text-[#2e251c]  transform duration-300 ease-in-out text-center text-white">
              Drilling
            </p>
          </div>
          <img
            src={product2}
            alt="Error Loading Image"
            className=" h-[30vh] md:h-[40vh] w-full object-cover"
          />
        </div>

        <div className="w-full md:w-[25%]">
          <img
            src={product3}
            alt="Error Loading Image"
            className=" h-[30vh] md:h-[40vh] w-full object-cover"
          />

          <div className="h-[15vh] md:h-[30vh] bg-[#5d5b62] flex items-center justify-center flex-row md:flex-col gap-2 md:gap-4">
            <img
              src={logo3}
              alt="Error Loading Logo"
              srcset=""
              className="h-10 md:h-20 filter-white"
            />
            <p className="text-lg md:text-2xl font-bold cursor-pointer hover:text-[#46444a]  transform duration-300 ease-in-out text-center text-white">
              Turning
            </p>
          </div>
        </div>

        <div className=" w-full md:w-[25%]">
          <div className="h-[15vh] md:h-[30vh] bg-[#423b3a] flex items-center justify-center flex-row md:flex-col gap-2 md:gap-4 w-[]">
            <img
              src={logo4}
              alt="Error Loading Logo"
              srcset=""
              className="h-10 md:h-20 filter-white"
            />
            <p className="text-lg md:text-2xl font-bold cursor-pointer hover:text-[#2d2928]  transform duration-300 ease-in-out text-center text-white">
              Small Tools
            </p>
          </div>
          <img
            src={product4}
            alt="Error Loading Image"
            className=" h-[30vh] md:h-[40vh] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
