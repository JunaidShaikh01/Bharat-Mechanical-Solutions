import React, { useEffect, useState } from "react";
import image1 from "../../Pitchers/Slides/Slide1.jpg";
import image2 from "../../Pitchers/Slides/Slide2.jpg";
import image3 from "../../Pitchers/Slides/Slide3.jpg";
import image4 from "../../Pitchers/Slides/Slide4.jpg";
import image5 from "../../Pitchers/Slides/Slide5.jpg";

export default function Sliders() {
  const slides = [
    {
      id: 1,
      image: image1,
      title1: "MFH-RAPTOR",
      title2: "High feed milling with larger D.O.C",
      description:
        "Excellent performance in various applications, including Automotive Parts, difficult-to-cut materials, and mold machining",
    },
    {
      id: 2,
      image: image2,
      title1: "MB45 Series",
      title2: "45° General Purpose Milling Series",
      description:
        "Durable And Versatile Performance with Economical 8-Edge Inserts",
    },
    {
      id: 3,
      image: image3,
      title1: "MA90 Series",
      title2: "90° Tangential Milling Series",
      description:
        "Tough and Relaible Performance Higher Rigidity with Lower Cutting Forces",
    },
    {
      id: 4,
      image: image4,
      title1: "PR115S / PR120S",
      title2: "Next Generation PVD Grades for Heat-Resistant Alloy",
      description:
        "Conquer challenges of turning heat-resistant alloys with Kyocera's PR115S / PR120S Series",
    },
    {
      id: 5,
      image: image5,
      title1: "CA115P / CA125P",
      title2: "Next Generation CVD Grades for Steel Turning",
      description:
        "Experience the new standard in steel turning applications with unmatched tool life",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-500" : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="relative flex-shrink-0 w-full h-[75vh]">
          <img
            src={slides[slides.length - 1].image}
            alt={`Slide ${slides[slides.length - 1].id}`}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-center">
            <div className="pl-6 sm:pl-16 flex flex-col gap-4 w-[50%]">
              <h1 className="text-gray-400 text-[1.8rem] sm:text-[2.5rem] font-bold ">
                {slides[slides.length - 1].title1}
              </h1>
              <h4 className="text-[#d6d4d4] text-[1.4rem] sm:text-[1.5rem] font-semibold">
                {slides[slides.length - 1].title2}
              </h4>
              <p className="text-[#b7b6b6] text-[1rem] sm:text-[1.2rem]">
                {slides[slides.length - 1].description}
              </p>
            </div>
          </div>
        </div>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-[70vh] lg:h-[90vh]"
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-center">
              <div className="pl-6 sm:pl-16 flex flex-col gap-4 w-[50%]">
                <h1 className="text-gray-400 text-[1.8rem] sm:text-[2.5rem] font-bold ">
                  {slide.title1}
                </h1>
                <h4 className="text-[#d6d4d4] text-[1.4rem] sm:text-[1.5rem] font-semibold">
                  {slide.title2}
                </h4>
                <p className="text-[#b7b6b6] text-[1rem] sm:text-[1.2rem]">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="relative flex-shrink-0 w-full h-[75vh]">
          <img
            src={slides[0].image}
            alt={`Slide ${slides[0].id}`}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-start justify-center">
            <div className="pl-6 sm:pl-16 flex flex-col gap-4 w-[50%]">
              <h1 className="text-gray-400 text-[1.8rem] sm:text-[2.5rem] font-bold ">
                {slides[0].title1}
              </h1>
              <h4 className="text-[#d6d4d4] text-[1.4rem] sm:text-[1.5rem] font-semibold">
                {slides[0].title2}
              </h4>
              <p className="text-[#b7b6b6] text-[1rem] sm:text-[1.2rem]">
                {slides[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
