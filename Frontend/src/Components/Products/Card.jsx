import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./products.module.css";
import { useRecoilState } from "recoil";
import { selectedIdState, selectedNameState } from "../Recoil/recoilState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Card = ({ image, title, id }) => {
  const [hoverButton, setHoverButton] = useState(null);
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  const [selecedName, setSelectedName] = useRecoilState(selectedNameState);

  const handleClick = () => {
    setSelectedId(id);
    setSelectedName(title);
    navigate("/product-view");
  };
  console.log("Selected Name", selecedName);
  console.log("SelectedId:", selectedId);
  return (
    <div
      className={`${styles.card}  shadow-lg rounded-lg overflow-hidden`}
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-48 " />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <button
          className="text-white bg-[#333333]  w-[60%]   border shadow-xl transform ease-in-out duration-300 flex font-semibold py-2  rounded justify-center items-center gap-2"
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
        </button>
      </div>
    </div>
  );
};

export default Card;
