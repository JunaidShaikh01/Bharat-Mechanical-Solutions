import React from "react";
import banner from "../../Pitchers/OurStrength/banner.jpg";
import icon1 from "../../Pitchers/OurStrength/Quallity.png";
import icon2 from "../../Pitchers/OurStrength/machining.png";
import icon3 from "../../Pitchers/OurStrength/TrustedDurability.png";
import icon4 from "../../Pitchers/OurStrength/BudgetFriendly.png";
import icon5 from "../../Pitchers/OurStrength/GratefullCustomer.png";
export default function OurStrength() {
  return (
    <div className="relative h-[100vh]">
      <div className="relative h-[30vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#6F2B2B] opacity-90"></div>
        <div className=" w-full relative  text-white px-8 pt-4">
          <h1 className="text-lg ">OUR STRENGTH</h1>
          <p className="border-b-2 border-white w-[5%] mt-3 "></p>
        </div>
      </div>

      <div className=" flex absolute top-[20vh] w-full justify-center ">
        <div className="relative">
          <img
            src={banner}
            alt="Banner Image"
            className="h-[60vh] w-[90vw] shadow-xl rounded-3xl"
          />
          <div className="absolute inset-0 flex items-center justify-evenly bg-black bg-opacity-60 rounded-3xl ">
            <div className="z-50 text-white flex flex-col items-center justify-center gap-4">
              <img src={icon1} alt="Icon 1" className="h-20 filter-white  " />
              <p className="text-center  text-lg font-bold cursor-pointer hover:text-[#df8585]  transform duration-300 ease-in-out ">
                Exceptional Quality
              </p>
            </div>
            <div className="z-50 text-white flex flex-col items-center justify-center gap-4">
              <img src={icon2} alt="Icon 2" className="h-20  filter-white" />
              <p className="text-center   text-lg font-bold cursor-pointer hover:text-[#df8585]  transform duration-300 ease-in-out ">
                Perfect Accurecy
              </p>
            </div>
            <div className="z-50 text-white flex flex-col items-center justify-center gap-4">
              <img
                src={icon3}
                alt="Icon 3"
                className="h-20 filter-white font-bold"
              />
              <p className="text-center   text-lg font-bold cursor-pointer hover:text-[#df8585]  transform duration-300 ease-in-out ">
                Trusted Durability
              </p>
            </div>
            <div className="z-50 text-white flex flex-col items-center justify-center gap-4">
              <img src={icon4} alt="Icon 4" className="h-20 filter-white" />
              <p className="text-center   text-lg font-bold cursor-pointer hover:text-[#df8585]  transform duration-300 ease-in-out ">
                Budget Friendly Options
              </p>
            </div>
            <div className="z-50 text-white flex flex-col items-center justify-center gap-4">
              <img src={icon5} alt="Icon 5" className="h-20 filter-white" />
              <p className="text-center   text-lg font-bold cursor-pointer hover:text-[#df8585]  transform duration-300 ease-in-out ">
                Gratefull Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
