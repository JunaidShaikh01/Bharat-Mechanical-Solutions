import React from "react";
import Nvabar from "../Navbar/Navbar";
import banner from "../../Pitchers/productBanner.jpg";
import Footer from "../Footer/Footer";
import product1 from "../../Pitchers/ProductsBanner/Milling.jpg";
import product2 from "../../Pitchers/ProductsBanner/turning-banner.jpg";
import product3 from "../../Pitchers/ProductsBanner/Drilling-banner.jpeg";
import product4 from "../../Pitchers/ProductsBanner/Grooving.jpg";
import product5 from "../../Pitchers/ProductsBanner/Threading.jpg";
import product6 from "../../Pitchers/ProductsBanner/smallTools-banner.jpg";
import product7 from "../../Pitchers/ProductsBanner/APIRingGroover.jpg";
import product8 from "../../Pitchers/custom-tools-cat.jpg";
import product9 from "../../Pitchers/ProductsBanner/solidCarbideRoundTools.jpg";
import styles from "./products.module.css";
import Card from "./Card";
export default function Products() {
  const cardsData = [
    {
      id: 1,
      image: product1,
      title: "Milling",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 2,
      image: product2,
      title: "Turning",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 3,
      image: product3,
      title: "Drilling",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 4,
      image: product4,
      title: "Grooving ",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 5,
      image: product5,
      title: "Threading",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 6,
      image: product6,
      title: "Small Tools",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 7,
      image: product7,
      title: "API Ring Groover",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 8,
      image: product8,
      title: "Custom Tools",
      details: "Some details about the first card.",
      link: "Click here",
    },
    {
      id: 9,
      image: product9,
      title: "Solid Carbide Round Tools",
      details: "Some details about the first card.",
      link: "Click here",
    },
  ];
  return (
    <div>
      <Nvabar />
      <div className="Products flex flex-col gap-4 mb-8">
        <div className="productSection h-[55vh] sm:h-[82vh] relative ">
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
        <div
          className={`grid gap-4  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  ${styles.cardsContainer}`}
        >
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
