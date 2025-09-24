import React, { useEffect, useRef, useState } from "react";
import common1 from "../assets/common1.png";
import common2 from "../assets/common2.png";
import common3 from "../assets/common3.png";

const SectionFour = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stop after first reveal
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="bg-[#80bf1e]">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap gap-x-10 py-12 md:py-16 lg:py-[120px]">
          {/* Mobile heading */}
          <div className="w-full order-1 lg:hidden">
            <h1 className="text-[#0c0f3b] text-2xl md:text-3xl text-center font-bold">
              Chill in a <span className="text-[#80bf1e]">common area</span>
              <br />
              that's anything but common
            </h1>
          </div>

          {/* Images */}
          <div className="py-10 lg:py-0 w-full lg:w-[45%] flex gap-x-10 order-2 lg:order-1">
            <div className="w-1/2">
              <img src={common3} alt="bestlife1.png" />
            </div>
            <div className="w-1/2 flex flex-col gap-y-10">
              <img src={common1} alt="bestlife2.png" className="rounded-xl" />
              <img src={common2} alt="bestlife3.png" className="rounded-xl" />
            </div>
          </div>

          {/* Text block with scroll animation */}
          <div
            ref={textRef}
            className={`hidden lg:flex w-[45%] py-5 flex-col justify-center items-start order-2 
              transform transition-all duration-1000 ease-out
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <h1 className="text-[#0c0f3b] text-2xl md:text-3xl font-bold">
              Chill in a <span className="text-[#80bf1e]">common area</span>
              <br />
              that's anything but common
            </h1>
            <p className="text-start text-white text-lg mt-5">
              Nope, we don't try to pass off a few plastic chairs and a TV as a
              common area. We've replaced them with sofas, bean bags and
              large-screen TVs. And we've also added gaming zones, fitness
              centres and chillout corners as a bonus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
