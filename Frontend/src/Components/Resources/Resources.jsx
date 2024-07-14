import React from "react";
import Nvabar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import resourcesBanner from "../../Pitchers/Resources/ResourcesBanner.jpg";
import certicate from "../../Pitchers/Resources/Certificate.jpg";

//Pdf Images imports
import BmsBanner from "../../Pitchers/Resources/bharatBanner.jpg";
import imgage1 from "../../Pitchers/Resources/Kyocera_cutting_tools_General_catalog.jpg";
import imgage2 from "../../Pitchers/Resources/kyocera_round_tools_catalog.jpg";
import imgage3 from "../../Pitchers/Resources/kyocera_Round_Tools_Digital_Catalog.jpg";
import imgage4 from "../../Pitchers/Resources/Kyocera_sgs_micro_tools.jpg";
import imgage5 from "../../Pitchers/Resources/Kyocera_sgs_precision_tools_global_products_catalog.jpg";

const catalogsDetails = [
  {
    imgage: BmsBanner,
    link: "https://drive.google.com/file/d/1ZEY6oz3crA0IL5QjYa-JVXJ9vLTYkn5P/view?usp=drive_link",
  },
  {
    imgage: imgage1,
    link: "https://drive.google.com/file/d/1eiYBTsiY60c1HFM1Q60ZLPNRllRGCeH_/view?usp=drive_link",
  },
  {
    imgage: imgage2,
    link: "https://drive.google.com/file/d/1qhJzPZafWdonXkWCs2j5JXOqhDifnFNT/view?usp=drive_link",
  },
  {
    imgage: imgage3,
    link: "https://drive.google.com/file/d/12G50TTG8uzF1sG6OUnUhTmXOt3cJboIU/view?usp=drive_link",
  },
  {
    imgage: imgage4,
    link: "https://drive.google.com/file/d/1ZUKyF4gpzsmxjIoxQky6jWEr-hv-Lx6T/view?usp=drive_link",
  },
  {
    imgage: imgage5,
    link: "https://drive.google.com/file/d/1AL8APs-EH4B5pGVqdfaiOBbaY3y5d92A/view?usp=drive_link",
  },
];

export default function Resources() {
  return (
    <div>
      <Nvabar />
      <div className="bannerSection h-[50vh] sm:h-[82vh] relative  ">
        <img
          src={resourcesBanner}
          alt="Recources Banner"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h1 className="text-white text-5xl  font-thin z-70 cursor-pointer">
            Resources{" "}
          </h1>
        </div>
      </div>
      <div className="px-8 ">
        <div className=" mt-4">
          <h1 className=" text-2xl text-zinc-950"> CATALOG LIST</h1>
          <p className="text-zinc-800 text-xl pl-4 mt-2">
            View and download our most recent cutting tools catalogs
          </p>
          <p className="border-b-2 border-black w-full  mt-3 "></p>
        </div>
        <div className="flex flex-col justify-center  items-center my-4 gap-4">
          <div className="">
            <h6 className="font-bold text-3xl text-center font-josefine text-zinc-950 ">
              PDF & FLIPBOOK CATALOGS
            </h6>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 ">
            {catalogsDetails.map((catalog, index) => {
              return (
                <div
                  key={index}
                  className="flex  flex-col w-full items-center gap-2 border-2  border-zinc-300 shadow-md rounded-md p-4"
                >
                  <img
                    src={catalog.imgage}
                    alt="Error While Loading The Image"
                    className="h-[40vh] md:h-[50vh] w-[70vw] md:w-[40vw] lg:w-[20vw] shadow-xl rounded-md"
                  />
                  <a
                    href={catalog.link}
                    target="_blank"
                    className="text-lg font-josefine w-full text-center px-4 bg-[#1f2937] py-1 rounded shadow-lg text-white hover:text-white hover:bg-[#374151] transform duration-300 ease-in-out"
                  >
                    Download Pdf
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 my-4 bg-blue-50">
        <p className="text-2xl text-zinc-950 my-5 text-center px-4">
          CERTIFICATION OF DISTRIBUTION
        </p>
        <img
          src={certicate}
          alt="Error while loading image"
          className="shadow-lg h-[50vh] md:h-[70vh] mb-4 w-[80vw] md:w-[70vh]"
        />
      </div>
      <Footer />
    </div>
  );
}
