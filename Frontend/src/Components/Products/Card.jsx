import React from "react";
import { Link } from "react-router-dom";

import styles from "./products.module.css";
const Card = ({ image, title, details, link }) => {
  return (
    <div className={`${styles.card}  shadow-lg rounded-lg overflow-hidden`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{details}</p>
        <Link to={link} className="text-blue-500 hover:underline">
          More Information
        </Link>
      </div>
    </div>
  );
};

export default Card;
