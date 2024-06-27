import React from "react";
import Nvabar from "../Navbar/Navbar";
import banner from "../../Pitchers/productBanner.jpg";
import Footer from "../Footer/Footer";
import product1 from "../../Pitchers/product1.jpg";
import product2 from "../../Pitchers/product2.jpg";
import product3 from "../../Pitchers/product3.jpg";
import product4 from "../../Pitchers/product4.jpg";
import product5 from "../../Pitchers/product5.jpg";
import product6 from "../../Pitchers/product6.jpg";
import product7 from "../../Pitchers/product7.jpg";
import product8 from "../../Pitchers/product8.jpg";
import product9 from "../../Pitchers/product9.jpg";
import styles from "./products.module.css";
import Card from "./Card";
export default function Products() {
  const cardsData = [
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
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 3,
      image: product3,
      title: "Card title 3",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 4,
      image: product4,
      title: "Card title 4",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 5,
      image: product5,
      title: "Card title 5",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 6,
      image: product6,
      title: "Card title 6",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 7,
      image: product7,
      title: "Card title 7",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 8,
      image: product8,
      title: "Card title 8",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 9,
      image: product9,
      title: "Card title 9",
      details: "Some details about the first card.",
      link: "Click here",
    },
  ];
  return (
    <div>
      <Nvabar />
      <div className="Products flex flex-col gap-4 mb-8">
        <div className="productSection h-[82vh] relative ">
          <img
            src={banner}
            alt="banner"
            className="h-full w-screen object-cover "
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <h1 className="text-white text-5xl  font-thin z-70 cursor-pointer">
              Our Products{" "}
            </h1>
          </div>
        </div>
        <div className={`${styles.cardsContainer} px-40 mt-8 grid gap-4`}>
          {cardsData.map((card, index) => (
            <Card
              id={card.id}
              key={index}
              image={card.image}
              title={card.title}
              details={card.details}
              link={card.link}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
