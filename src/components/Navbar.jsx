import React from "react";
import logo from "../assets/Stanza_Living_Logo_3x.png&w=3840&q=75.png";
import { TfiAngleUp } from "react-icons/tfi";
const Navbar = () => {
  return (
    <nav className="fixed md:static container max-w-[1025px] mx-auto flex justify-between py-6 px-[70px]">
    <a href="/">  <img src={logo} alt="logo.png" className="w-[109px] h-14 img-fluid " /></a>
      <div className="hidden md:flex lg:mt-3 ">
        <span className="me-8 font-medium relative cursor-pointer  after:content-[''] after:absolute after:left-0 after:bottom-[15px] after:w-full after:h-[2px] after:bg-[#60c3ad] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
          Explore Residences
        </span>

        <div className="relative group">
          <button className="font font-medium flex items-center">
            Know More
            <TfiAngleUp className="mt-1 ms-2 transition-transform duration-300 group-hover:rotate-180" />
          </button>

          <div
            className="absolute top-full left-0 py-5 w-60  rounded-lg shadow-md 
                  scale-y-0 group-hover:scale-y-100 origin-top duration-300 flex flex-col"
          >
            <a href="" className="hover:bg-[#60c3ae21] hover:underline px-2 py-1 rounded leading-5">About Us</a>
            <a href="" className="hover:bg-[#60c3ae21] hover:underline px-2 py-1 rounded leading-5">Our Team</a>
            <a href="" className="hover:bg-[#60c3ae21] hover:underline px-2 py-1 rounded leading-5">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
