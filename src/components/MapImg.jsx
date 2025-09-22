import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Mapimg from "../assets/Map.png"
const MapImg = () => {
  return (
<div className="container mx-auto">
    <h1 className="text-2xl font-bold text-center pb-20">You moved to a new city,
so we moved there too</h1>
  <div className="flex flex-wrap gap-x-4 ">
    <div className="text-[11px] sm:text-sm  md:text-base text-center font-semibold lg:text-xl w-[30%] flex flex-col justify-center items-center border border-gray-50  drop-shadow-2xl shadow-xl p-4 rounded-lg">
      <p className=" ">100 Desks in</p>
      <p className=" "> Dhanmondi Branch</p>
      <p className="">July 2017</p>
    </div>
    <div className="text-[11px] sm:text-sm  md:text-base text-center font-semibold lg:text-xl w-[30%] flex flex-col justify-center items-center border border-gray-50  drop-shadow-2xl shadow-xl p-4 rounded-lg">
      <p className=" ">100 Desks in</p>
      <p className=" "> Shamoli Branch</p>
      <p className="">July 2017</p>
    </div>
    <div className="text-[11px] sm:text-sm  md:text-base text-center font-semibold lg:text-xl w-[30%] flex flex-col justify-center items-center border border-gray-50  drop-shadow-2xl shadow-xl p-4 rounded-lg">
      <p className=" ">100 Desks in</p>
      <p className=" "> Gulshan Branch</p>
      <p className="">July 2017</p>
    </div>


  </div>
  <div className="flex justify-center items-center mt-20">
    <img src={Mapimg} alt="" />
</div>

</div>

  );
};

export default MapImg;
