import React, { useState } from "react";
import logo from "../assets/Dvalley Logo Branding Plan.png";
import logo2 from "../assets/Dvalley Logo Branding Plan.png";
import { TfiAngleUp } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile main menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // mobile inner dropdown

  return (
    <>
      <nav className=" w-full bg-white  shadow-sm md:shadow-none md:static container mx-auto flex justify-between p-3 md:py-6 z-30">
        {/* Mobile logo */}
        <div className="md:hidden">
          <a href="/">
            <img src={logo2} alt="logo" className="img-fluid" width={120} />
          </a>
        </div>

        {/* Desktop logo */}
        <div className="hidden md:block">
          <a href="/">
            <img src={logo} alt="logo" className="img-fluid" width={150} />
          </a>
        </div>

        {/* Desktop nav links (unchanged) */}
        <div className="hidden md:flex mt-2 lg:mt-3 md:space-x-4">
<Link to="/explore-residencies">
          <span
            className="text-sm md:text-base font-medium relative cursor-pointer 
            after:content-[''] after:absolute after:left-0 after:bottom-[0px] 
            after:w-full after:h-[2px] after:bg-[#80bf1e] after:scale-x-0 
            hover:after:scale-x-100 after:transition-transform after:duration-300 
            after:origin-left "
          >
            Explore Residences
          </span>
</Link>

          {/* Desktop dropdown */}
          <div className="relative group">
            <button className="text-sm md:text-base cursor-pointer font-medium flex items-center">
              Know More
              <TfiAngleUp className="md:mt-1  md:ms-2 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div
              className="absolute top-full py-5 right-0 w-60 rounded-lg z-50
                            scale-y-0 group-hover:scale-y-100 origin-top duration-300 
                            flex flex-col bg-white border border-slate-300 shadow-3xl"
            >
              <Link to="/about" className="hover:bg-[#81bf1e6c] py-2 px-5 leading-5">
                About Us
              </Link>
              <Link to="/team" className="hover:bg-[#81bf1e6c] py-2 px-5 leading-5">
                Our Team
              </Link>
              <Link
                to="/partner-with-us"
                className="hover:bg-[#81bf1e6c] py-2 px-5 leading-5"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden text-xl"
          onClick={() =>
            setIsOpen((prev) => {
              // if closing the main mobile menu, also close inner dropdown
              if (prev) setIsDropdownOpen(false);
              return !prev;
            })
          }
          aria-label="Toggle menu"
        >
          {isOpen ? <RxCross1 /> : <FiMenu />}
        </button>
        {/* Mobile nav container - ALWAYS mounted so we can animate max-height */}
<div
  className={`md:hidden w-full bg-white shadow-lg absolute top-16 z-30 overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen
      ? "max-h-[420px] opacity-100 pointer-events-auto"
      : "max-h-0 opacity-0 pointer-events-none"
  }`}
  aria-hidden={!isOpen}
>
  <div className="px-6 py-4 flex flex-col space-y-4">
    <Link
      to="/explore-residencies"
      className="hover:text-[#80bf1e]"
      onClick={() => {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }}
    >
      Explore Residencies
    </Link>

    {/* Mobile inner dropdown */}
    <div>
      <button
        className="w-full flex justify-between items-center py-2 text-left font-medium"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        aria-expanded={isDropdownOpen}
      >
        Know More
        <TfiAngleUp
          className={`transition-transform duration-400 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isDropdownOpen
            ? "max-h-[200px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col pl-4 py-2 space-y-2">
          <Link
            to="/about"
            className="hover:text-[#80bf1e]"
            onClick={() => {
              setIsOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            About Us
          </Link>
          <Link
            to="/team"
            className="hover:text-[#80bf1e]"
            onClick={() => {
              setIsOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            Our Team
          </Link>
          <Link
            to="/partner-with-us"
            className="hover:text-[#80bf1e]"
            onClick={() => {
              setIsOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
      </nav>



    </>
  );
};

export default Navbar;
