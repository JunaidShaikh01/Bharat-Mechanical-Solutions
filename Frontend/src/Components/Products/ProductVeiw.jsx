import React from "react";
import { useRecoilState } from "recoil";
import { selectedIdState } from "../Recoil/recoilState";
import Nvabar from "../Navbar/Navbar";
import product1 from "../../Pitchers/product1.jpg";
import product2 from "../../Pitchers/product2.jpg";
import product3 from "../../Pitchers/product3.jpg";
import product4 from "../../Pitchers/product4.jpg";
import product5 from "../../Pitchers/product5.jpg";
import product6 from "../../Pitchers/product6.jpg";
import product7 from "../../Pitchers/product7.jpg";
import product8 from "../../Pitchers/product8.jpg";
import product9 from "../../Pitchers/product9.jpg";
import { Link } from "react-router-dom";
export default function ProductVeiw() {
  const [selectedId] = useRecoilState(selectedIdState);

  const productData = [
    {
      id: 1,
      image: product1,
      title: "Card title 1",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 2,
      image: product2,
      title: "Card title 2",
      details: "Some details about the Second card.",
      link: "Click here",
    },
    {
      id: 3,
      image: product3,
      title: "Card title 3",
      details: "Some details about the Third card.",
      link: "Click here",
    },
    {
      id: 4,
      image: product4,
      title: "Card title 4",
      details: "Some details about the Fourth card.",
      link: "Click here",
    },
    {
      id: 5,
      image: product5,
      title: "Card title 5",
      details: "Some details about the Fifth card.",
      link: "Click here",
    },
    {
      id: 6,
      image: product6,
      title: "Card title 6",
      details: "Some details about the Sixth card.",
      link: "Click here",
    },
    {
      id: 7,
      image: product7,
      title: "Card title 7",
      details: "Some details about the Sevent card.",
      link: "Click here",
    },
    {
      id: 8,
      image: product8,
      title: "Card title 8",
      details: "Some details about the Eight card.",
      link: "Click here",
    },
    {
      id: 9,
      image: product9,
      title: "Card title 9",
      details: "Some details about the nine card.",
      link: "Click here",
    },
  ];
  const email = "bharat.mechsolutions@gmail.com";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  return (
    <div>
      <Nvabar />
      <div className="productMain">
        <div className="border-t ">
          {productData.map((product) =>
            product.id === selectedId ? (
              <div
                key={product.id}
                className="flex h-[81vh] w-full items-center  justify-evenly"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[60vh] shadow-xl rounded-lg object-cover"
                />
                <div className="flex flex-col gap-4">
                  <h2>{product.title}</h2>
                  <p>{product.details}</p>

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
      </div>
    </div>
  );
}
