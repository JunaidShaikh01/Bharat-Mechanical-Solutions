import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./products.module.css";
import { useRecoilState } from "recoil";
import { selectedIdState } from "../Recoil/recoilState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Card = ({ image, title, details, link, id }) => {
  const [hoverButton, setHoverButton] = useState(null);
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  const handleClick = () => {
    setSelectedId(id);
    navigate("/product-view");
  };
  console.log("SelectedId:", selectedId);
  return (
    <div
      className={`${styles.card}  shadow-lg rounded-lg overflow-hidden`}
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{details}</p>
        <Link
          to={link}
          className="text-white bg-[#333333]  w-[60%] hover:bg-[#f2f2f2] hover:font-bold hover:text-black border shadow-xl transform ease-in-out duration-300 flex font-semibold py-2 px-4 rounded justify-center items-center gap-2"
          onMouseEnter={() => setHoverButton("view-" + id)}
          onMouseLeave={() => setHoverButton(null)}
        >
          View More
          {hoverButton === "view-" + id && (
            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition-opacity duration-300 opacity-100"
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Card;
