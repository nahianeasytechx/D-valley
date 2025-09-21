import React from "react";
import logo from "../assets/Dvalley Logo Branding Plan.png";
import logo2 from "../assets/Dvalley Logo Branding Plan.png";
import { TfiAngleUp } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<>
    <nav className="absolute md:static container  mx-auto flex justify-between py-6   z-30">
      {/* Mobile logo */}
      <div className="md:hidden">
        <a href="/">
          <img
            src={logo2}
            alt="logo"
            className=" img-fluid"
            width={120}

          />
        </a>
      </div>

      {/* Desktop logo */}
      <div className="hidden md:block">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className=" img-fluid"
            width={150}
          />
        </a>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex lg:mt-3 space-x-4">
        <span className=" font-medium relative cursor-pointer 
          after:content-[''] after:absolute after:left-0 after:bottom-[15px] 
          after:w-full after:h-[2px] after:bg-[#80bf1e] after:scale-x-0 
          hover:after:scale-x-100 after:transition-transform after:duration-300 
          after:origin-left">
          Explore Residences
        </span>

        {/* Dropdown */}
        <div className=" relative group">
          <button className="cursor-pointer font-medium flex items-center">
            Know More
            <TfiAngleUp className="mt-1 ms-2 transition-transform duration-300 group-hover:rotate-180" />
          </button>

          <div className="absolute top-full py-5 right-0  w-60 rounded-lg  z-50
                          scale-y-0 group-hover:scale-y-100 origin-top duration-300 
                          flex flex-col bg-white border border-slate-300 shadow-3xl">
<Link
  to="/about"
  className="hover:bg-[#81bf1e6c] py-2 px-5  leading-5"
>
  About Us
</Link>
<Link
  to="/#team"
  className="hover:bg-[#81bf1e6c] py-2 px-5   leading-5"
>
  Our Team
</Link>
<Link
  to="/#partner"
  className="hover:bg-[#81bf1e6c] py-2  px-5  leading-5"
>
  Partner With Us
</Link>
          </div>
        </div>
      </div>
    </nav>
</>
  );
};

export default Navbar;
