import React from "react";
import aboutBanner from "../../Pitchers/AboutUs.jpg";
import { useNavigate } from "react-router-dom";
export default function AboutUs() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="px-8 lg:h-[80vh] flex justify-between lg:flex-row mt-8 md:mt-0 flex-col mb-8 bg-zinc-100">
      <div className="textSection  lg:w-[40%] mt-4 mb-4 lg:mb-0">
        <div>
          <h1 className="text-2xl">ABOUT US</h1>
          <p className="border-b-2 border-zinc-900 w-[20%] mt-3"></p>
        </div>
        <div className="flex flex-col  gap-6 mt-4">
          <h1 className="text-2xl font-bold font-rajdhani">
            Welcome to Bharat Mechanical Solutions
          </h1>
          <p className="text-lg">
            Bharat Mechanical Solutions FZE is a leading distributor of KYOCERA
            cutting tools in the Middle East, offering top-quality industrial
            tools and solutions to various industries. Committed to excellence
            and innovation, we continually expand our product range to meet our
            clients' evolving needs. Our partnership with KYOCERA, a global
            leader in industrial cutting tools, enables us to provide
            premium-grade products, including drills, end mills, turning
            inserts, and threading tools, known for their precision, durability,
            and performance.
          </p>
          <button
            className="bg-slate-900 text-white px-4 py-2 rounded-md w-[50%] sm:w-[30%]"
            onClick={handleClick}
          >
            View More
          </button>
        </div>
      </div>
      <div className="">
        <div className="imageSection relative  h-full flex items-center justify-end mb-4 ">
          <img
            src={aboutBanner}
            alt="Error While Loading image"
            className=" w-[60vw] md:w-[70vw] lg:w-full h-[75vh] mt-4 lg:mt-0 mb-4 lg-mb-0 shadow-2xl "
          />
          <div className="absolute left-[-1%] md:left-[15%] lg:left-[-40%] shadow-2xl bg-slate-500 h-[30%] py-4 px-6 lg:px-8 flex items-center lg:items-start flex-col justify-center gap-4 lg:gap-4 ">
            <p className="text-2xl text-center  text-slate-50 flex flex-col lg:flex-row">
              <span>Customer</span> <span>First</span>
            </p>
            <p className="text-xl  text-center  text-slate-50 flex flex-col lg:flex-row">
              <span> Advancing</span> <span>Productivity</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
