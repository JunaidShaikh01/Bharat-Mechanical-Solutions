import React from "react";
import image1 from "../../Pitchers/OurCustomers/Airplane.jpg";
import image2 from "../../Pitchers/OurCustomers/Cars.jpg";
import image3 from "../../Pitchers/OurCustomers/gears.jpg";
import image4 from "../../Pitchers/OurCustomers/Solar.jpg";
export default function OurCustomer() {
  return (
    <div className=" bg-zinc-400 flex justify-center flex-col gap-8 w-full">
      <div className="flex flex-col items-center gap-4 px-4 sm:px-8  md:px-16 mt-10">
        <h1 className="text-center text-3xl text-[#333333] drop-shadow-2xl">
          OUR CUSTOMERS
        </h1>

        <p className="text-center text-xl text-[#F0F0F0] drop-shadow-xl">
          Our customers are at the heart of our business, driving our commitment
          to excellence in providing top-tier CNC machine tools. We prioritize
          delivering precision, reliability, and tailored solutions to meet
          their manufacturing needs with unmatched professionalism.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-8 px-4 sm:px-8 gap-4">
        <div className="w-full  bg-[#F5F5F5] h-[70vh] shadow-xl">
          <img
            src={image1}
            alt="Customer 1"
            className="w-full object-cover h-[40%]"
          />
          <div className="text-center flex flex-col gap-4 mt-4 items-center h-[60%] px-8">
            <h1 className="text-xl">AEROSPACE & DEFENCE</h1>
            <p className="text-center text-slate-900 font-base">
              We supply high-precision cutting tools for airframes, engines,
              components, composites, aluminum, and titanium in aerospace and
              defense sectors
            </p>
          </div>
        </div>
        <div className="w-full bg-[#F5F5F5] h-[70vh] shadow-xl">
          <img
            src={image2}

            
            alt="Customer 1"
            className="w-full object-cover h-[40%]"
          />
          <div className="text-center flex flex-col gap-4 mt-4 items-center h-[60%] px-8">
            <h1 className="text-xl">TRANSPORTATION </h1>
            <p className="text-center text-slate-900 font-base">
              Serving automobile, railway, heavy vehicle, and ship building
              industries with specialized cutting tools for efficient and
              reliable manufacturing processes.
            </p>
          </div>
        </div>
        <div className="w-full bg-[#F5F5F5] h-[70vh] shadow-xl">
          <img
            src={image3}
            alt="Customer 1"
            className="w-full  object-cover h-[40%]"
          />
          <div className="text-center flex flex-col gap-4 mt-4 items-center h-[60%] px-8">
            <h1 className="text-xl">GENERAL ENGINEERING</h1>
            <p className="text-center text-slate-900 font-base">
              From die casting to mold making, bearing manufacturing, and job
              shop services, our cutting tools ensure precision and performance
              across various engineering applications.
            </p>
          </div>
        </div>
        <div className="w-full  bg-[#F5F5F5] h-[70vh] shadow-xl">
          <img
            src={image4}
            alt="Customer 1"
            className="w-full  object-cover h-[40%] "
          />
          <div className="text-center flex flex-col gap-2 mt-4 items-center h-[60%] px-8">
            <h1 className="text-xl">ENERGY</h1>
            <p className="text-slate-900 text-center font-base">
              Our tools support power generation, oil and gas exploration, and
              wind turbine manufacturing with robust and efficient cutting
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
