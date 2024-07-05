import React from "react";
import image1 from "../../Pitchers/OurCustomers/Airplane.jpg";
import image2 from "../../Pitchers/OurCustomers/Cars.jpg";
import image3 from "../../Pitchers/OurCustomers/gears.jpg";
import image4 from "../../Pitchers/OurCustomers/Solar.jpg";
export default function OurCustomer() {
  return (
    <div className="h-[100vh]">
      <div className="px-8">
        <h1 className="text-2xl">OUR CUSTOMERS</h1>
        <p className="border-b-2 border-black w-[5%] mt-3"></p>
      </div>
      <div className="flex justify-evenly items-center h-[60vh]">
        <div className=" flex flex-col items-center justify-center px-4 py-2 border-2 border-black %w-[30]">
          <div>
            <img
              src={image1}
              alt="Error While loading the image"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div>
            <p>-Automobile</p>
            <p>-Railway</p>
            <p>-Heavy Vehicals</p>
            <p>-Shipbuilding</p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center px-4 py-2 border-2 border-black">
          <div>
            <img
              src={image2}
              alt="Error While loading the image"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div>
            <p>-Automobile</p>
            <p>-Railway</p>
            <p>-Heavy Vehicals</p>
            <p>-Shipbuilding</p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center px-4 py-2 border-2 border-black">
          <div>
            <img
              src={image3}
              alt="Error While loading the image"
              className="h-20 w-20 rounded-full "
            />
          </div>
          <div>
            <p>-Automobile</p>
            <p>-Railway</p>
            <p>-Heavy Vehicals</p>
            <p>-Shipbuilding</p>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center px-4 py-2 border-2 border-black">
          <div>
            <img
              src={image4}
              alt="Error While loading the image"
              className="h-20 w-20 rounded-full"
            />
          </div>
          <div>
            <p>-Automobile</p>
            <p>-Railway</p>
            <p>-Heavy Vehicals</p>
            <p>-Shipbuilding</p>
          </div>
        </div>
      </div>
    </div>
  );
}
