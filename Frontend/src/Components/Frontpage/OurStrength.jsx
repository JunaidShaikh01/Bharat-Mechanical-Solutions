import React from "react";
import banner from "../../Pitchers/OurStrength/banner.jpg";
import icon1 from "../../Pitchers/OurStrength/Quallity.png";
import icon2 from "../../Pitchers/OurStrength/machining.png";
import icon3 from "../../Pitchers/OurStrength/TrustedDurability.png";
import icon4 from "../../Pitchers/OurStrength/BudgetFriendly.png";
import icon5 from "../../Pitchers/OurStrength/GratefullCustomer.png";
const icons = [
  {
    icon: icon1,
    title: "  Exceptional Quality",
  },
  {
    icon: icon2,
    title: "Perfect Accuracy",
  },
  {
    icon: icon3,
    title: "Trusted Durability",
  },
  {
    icon: icon4,
    title: "Budget Friendly",
  },
  {
    icon: icon5,
    title: "Grateful Customers",
  },
];
export default function OurStrength() {
  return (
    <div className="relative h-[80vh] lg:h-[100vh]">
      <div className="relative h-[20vh] lg:h-[30vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#6F2B2B] opacity-90"></div>
        <div className=" w-full relative  text-white px-8 pt-4">
          <h1 className="text-2xl ">OUR STRENGTH</h1>
          <p className="border-b-2 border-white w-[25%] sm:-[15%] lg:w-[5%] mt-3 "></p>
        </div>
      </div>

      <div className=" flex  absolute top-[12vh] lg:top-[20vh] w-full justify-center ">
        <div className="relative">
          <img
            src={banner}
            alt="Banner Image"
            className=" h-[60vh] w-[90vw] shadow-xl rounded-3xl"
          />
          <div className="absolute inset-0 flex flex-wrap items-center justify-evenly bg-black bg-opacity-60 rounded-3xl px-4 lg:px-0  overflow-scroll sm:overflow-hidden">
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="z-50 text-white flex flex-col items-center justify-center gap-4 m-1 mb:m-2"
                >
                  <img
                    src={icon.icon}
                    alt="Icon"
                    className="h-20 filter-white  "
                  />
                  <p className="text-center text-sm sm:text-base md:text-lg font-bold cursor-pointer hover:text-[#df8585]  transform duration-300 ease-in-out ">
                    {icon.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
