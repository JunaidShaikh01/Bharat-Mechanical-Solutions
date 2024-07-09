import React from "react";
import { useRecoilState } from "recoil";
import { selectedNameState } from "../Recoil/recoilState";
import Footer from "../Footer/Footer";
import productData from "../Data/ProductData";
const formatName = (name) => {
  if (!name) return "";
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
export default function ProductCard() {
  const [selectedName] = useRecoilState(selectedNameState);
  console.log("Selected Name in ProductCard: ", selectedName);
  const formattedSelectedName = formatName(selectedName);
  const normalizedSelectedName = selectedName ? selectedName.toLowerCase() : "";
  // Debugging: Log normalizedSelectedName and productData keys
  console.log("Formated Name: ", formattedSelectedName);
  console.log("Product Data Keys: ", Object.keys(productData));
  const dataKey = Object.keys(productData).find(
    (key) => key === formattedSelectedName
  );

  if (!dataKey) {
    return <div>No products found for the selected category.</div>;
  }

  return (
    <div className="">
      <div className=" flex flex-col items-center gap-4 mt-4 mb-4 px-2 md:px-8 lg:px-0">
        {productData[dataKey].map((item) => (
          <div
            key={item.id}
            className="flex py-4 px-2  md:px-8 gap-4 md:gap-8 items-center justify-start border-b-2 border-gray-250  lg:max-w-[60%] w-[100%] shadow-md rounded-lg hover:bg-[#f2f2f2] transform duration-300 ease-in-out "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[60%] sm:w-[200px]"
            />
            <div className="titleDetailsSection    cursor-pointer">
              <h3 className="text-[#6d6d6d] hover:text-black transform ease-in-out duration-300 font-semibold text-base sm:text-lg md:text-2xl">
                {item.title}
              </h3>
              {/* <p>{item.details}</p> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
