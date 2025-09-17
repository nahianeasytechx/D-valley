import React from "react";
import common1 from "../assets/common1.png";
import common2 from "../assets/common2.png";
import common3 from "../assets/common3.png";

const SectionFour = () => {
  return (
    <div className="bg-[#60C3AD]">

      <div className="container mx-auto ">
        {/* Flex wrapper */}
        <div className="flex flex-wrap gap-x-10 py-12 md:py-16 lg:py-[120px]">
          {/* h1 for mobile (above images) */}
          <div className="w-full order-1 lg:hidden">
            <h1 className="text-2xl md:text-3xl text-center font-bold">
              Chill in a <span className="text-[#60C3AD]">common area</span>
              <br />
              that's anything but common
            </h1>
          </div>

          {/* IMAGE BLOCK */}
          <div className="py-10 lg:py-0 w-full lg:w-[45%] flex gap-x-2 order-2 lg:order-1">
            <div className="w-1/2">
              <img src={common3} alt="bestlife1.png" />
            </div>
            <div className="w-1/2 flex flex-col gap-y-10">
              <img src={common1} alt="bestlife2.png" className="rounded-xl" />
              <img src={common2} alt="bestlife3.png" className="rounded-xl" />
            </div>
          </div>

          {/* p for mobile (below images) */}
          <div className="w-full order-3 lg:hidden">
            <p className="text-center text-[#4E5253] md:text-lg mt-5">
              Nope, we don't try to pass off a few plastic chairs and a TV as a
              common area. We've replaced them with sofas, bean bags and
              large-screen TVs. And we've also added gaming zones, fitness
              centres and chillout corners as a bonus.
            </p>
          </div>

          {/* TEXT BLOCK for lg (h1 + p stacked) */}
          <div className="hidden lg:flex w-[45%] py-5 flex-col justify-center items-start order-2">
            <h1 className="text-2xl md:text-3xl  font-bold">
              Chill in a {' '}<span className="text-[#60C3AD]">common area</span>
              <br />
              that's anything but common
            </h1>
            <p className="text-start text-[#4E5253] text-lg mt-5">
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
