import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = ({ img, title, description, onClick }) => {
  return (
    // Card wrapper (clickable to trigger modal)
    <div
      className="relative cursor-pointer rounded-xl overflow-hidden shadow-md group"
      onClick={onClick}
    >
      {/* Background image */}
      <img
        src={img}
        alt={title}
        className="w-full h-50 lg:h-[135px] object-cover transform group-hover:scale-105 transition-transform duration-500"
      />

      {/* Gradient overlay (only appears on hover) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#80bf1e] to-[#183f35] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Always visible title + arrow */}
      <div className="absolute bottom-4 left-6 flex items-center gap-3 text-white z-30">
        <h3 className="text-lg lg:text-base font-bold">{title}</h3>
        <FaArrowRight className="text-xl bg-white text-[#232728] rounded-full p-1 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      {/* Extra description (revealed on hover) */}
      <div className="absolute top-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
        <p className="text-lg lg:text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default Services;
