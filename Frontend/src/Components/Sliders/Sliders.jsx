import React, { useEffect, useRef, useState } from "react";
import image1 from "../../Pitchers/1400-300-MFH-banner-2.jpg";
import image2 from "../../Pitchers/1400-300-PCB-banner.jpg";
import image3 from "../../Pitchers/API-Banner.jpg";
import image4 from "../../Pitchers/milling-banner.jpg";
import image5 from "../../Pitchers/smalltools-banner.jpg";
export default function Sliders() {
  const slides = [
    { id: 1, image: image1, text: "Slide 1 Text" },
    { id: 2, image: image2, text: "Slide 2 Text" },
    { id: 3, image: image3, text: "Slide 3 Text" },
    { id: 4, image: image4, text: "Slide 4 Text" },
    { id: 5, image: image5, text: "Slide 5 Text" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 500);
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={slideRef}
        className={`flex ${
          isTransitioning ? "transition-transform duration-500" : ""
        }`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-[75vh]"
            style={{ transition: "none" }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl">{slide.text}</h2>
            </div>
          </div>
        ))}

        <div
          className="relative flex-shrink-0 w-full h-[75vh]"
          style={{ transition: "none" }}
        >
          <img
            src={slides[0].image}
            alt={`Slide ${slides[0].id}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-2xl">{slides[0].text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
