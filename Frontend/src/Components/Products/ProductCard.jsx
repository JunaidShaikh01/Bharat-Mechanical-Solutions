import React from "react";
import { useRecoilState } from "recoil";
import { selectedNameState } from "../Recoil/recoilState";
import Footer from "../Footer/Footer";
import productData from "../Data/ProductData";
const formatName = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
export default function ProductCard() {
  const [selectedName] = useRecoilState(selectedNameState);
  console.log("Selected Name in ProductCard: ", selectedName);
  const formattedSelectedName = formatName(selectedName);
  const normalizedSelectedName = selectedName.toLowerCase();
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
      <div className=" flex flex-col items-center gap-4 mt-4 mb-4">
        {productData[dataKey].map((item) => (
          <div
            key={item.id}
            className="flex py-4 px-8  gap-8 items-center justify-start border-b-2 border-gray-250 max-w-[60%] w-[100%] shadow-md rounded-lg hover:bg-[#f2f2f2] transform duration-300 ease-in-out "
          >
            <img src={item.image} alt={item.title} />
            <div className="titleDetailsSection    cursor-pointer">
              <h3 className="text-[#6d6d6d] hover:text-black transform ease-in-out duration-300 font-semibold text-2xl">
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
