import React from "react";
import { useRecoilState } from "recoil";
import { selectedIdState } from "../Recoil/recoilState";
import Nvabar from "../Navbar/Navbar";
import product1 from "../../Pitchers/ProductsBanner/Milling.jpg";
import product2 from "../../Pitchers/ProductsBanner/Turning.jpg";
import product3 from "../../Pitchers/ProductsBanner/Drilling.jpg";
import product4 from "../../Pitchers/ProductsBanner/Grooving.jpg";
import product5 from "../../Pitchers/ProductsBanner/Threading.jpg";
import product6 from "../../Pitchers/ProductsBanner/SmallTools.jpg";
import product7 from "../../Pitchers/ProductsBanner/APIRingGroover.jpg";
import product8 from "../../Pitchers/ProductsBanner/CustomTools.jpg";
import product9 from "../../Pitchers/Solid Round/SolidCarbideRoundTools.jpg";
import ProductCard from "./ProductCard";
export default function ProductVeiw() {
  const [selectedId] = useRecoilState(selectedIdState);

  const productData = [
    {
      id: 1,
      image: product1,
      title1: "Indexable",
      title2: "Milling",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 2,
      image: product2,
      title1: "Indexable",
      title2: "Turning",
      details: "Some details about the Second card.",
      link: "Click here",
    },
    {
      id: 3,
      image: product3,
      title1: "Indexable",
      title2: "Drilling",
      details: "Some details about the Third card.",
      link: "Click here",
    },
    {
      id: 4,
      image: product4,
      title1: "Indexable",
      title2: "Grooving",
      details: "Some details about the Fourth card.",
      link: "Click here",
    },
    {
      id: 5,
      image: product5,
      title1: "Indexable",
      title2: "Threading",
      details: "Some details about the Fifth card.",
      link: "Click here",
    },
    {
      id: 6,
      image: product6,
      title1: "Indexable",
      title2: "Small Tools ",
      details: "Some details about the Sixth card.",
      link: "Click here",
    },
    {
      id: 7,
      image: product7,
      title1: "Indexable",
      title2: "API Ring Groover ",
      details: "Some details about the Sevent card.",
      link: "Click here",
    },
    {
      id: 8,
      image: product8,
      title1: "Indexable",
      title2: "Custom Tools",
      details: "Some details about the Eight card.",
      link: "Click here",
    },
    {
      id: 9,
      image: product9,
      title1: "Indexable",
      title2: "Solid Carbide Round Tool",
      details: "Some details about the nine card.",
      link: "Click here",
    },
  ];
  const email = "bharat.mechsolutions@gmail.com";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  return (
    <div>
      <Nvabar />
      <div className="productMain  ">
        <div className="border-t  flex justify-center border-gray-200 border-b-2 px-4 md:px-16">
          {productData.map((product) =>
            product.id === selectedId ? (
              <div
                key={product.id}
                className="flex flex-col  h-[81vh] w-full items-center  justify-evenly"
              >
                <img
                  src={product.image}
                  alt={product.title2}
                  className="h-[40%] w-full md:w-[70%] shadow-xl rounded-lg "
                />
                <div className="flex  gap-4 mt-0 items-center flex-col md:flex-row">
                  <div className="flex gap-2 items-center">
                    <h2 className="font-bold text-3xl">{product.title1}</h2>
                    <h2 className="text-2xl">{product.title2}</h2>
                  </div>

                  <a
                    href={gmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-transparent hover:text-black border shadow-xl transform duration-300 ease-in-out text-white font-bold py-2 px-4 rounded flex items-center justify-center w-[50%]"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            ) : null
          )}
        </div>
        <ProductCard />
      </div>
    </div>
  );
}
