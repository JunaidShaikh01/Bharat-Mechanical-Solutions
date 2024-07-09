import React from "react";
import image1 from "../../Pitchers/OurCustomers/Airplane.jpg";
import image2 from "../../Pitchers/OurCustomers/Cars.jpg";
import image3 from "../../Pitchers/OurCustomers/gears.jpg";
import image4 from "../../Pitchers/OurCustomers/Solar.jpg";

const customers = [
  {
    image: image1,
    alt: "Airplane",
    title: "Aerospace & Defence",
    description: `We supply high-precision cutting tools for airframes, engines,
              components, composites, aluminum, and titanium in aerospace and
              defense sectors`,
  },
  {
    image: image2,
    alt: "TRANSPORTATION",
    title: "TRANSPORTATION",
    description: ` Serving automobile, railway, heavy vehicle, and ship building
              industries with specialized cutting tools for efficient and
              reliable manufacturing processes.`,
  },
  {
    image: image3,
    alt: "GENERAL ENGINEERING",
    title: "GENERAL ENGINEERING",
    description: `From die casting to mold making, bearing manufacturing, and job
              shop services, our cutting tools ensure precision and performance
              across various engineering applications.`,
  },
  {
    image: image4,
    alt: "ENERGY",
    title: "ENERGY",
    description: `Our tools support power generation, oil and gas exploration, and
              wind turbine manufacturing with robust and efficient cutting
              solutions.`,
  },
];
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
        {customers.map((customer, index) => {
          return (
            <div
              key={index}
              className="w-full  bg-[#F5F5F5] h-[70vh] shadow-xl"
            >
              <img
                src={customer.image}
                alt={customer.alt}
                className="w-full object-cover h-[40%]"
              />
              <div className="text-center flex flex-col gap-4 mt-4 items-center h-[60%] px-8">
                <h1 className="text-xl">{customer.title}</h1>
                <p className="text-center text-slate-900 font-base">
                  {customer.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
