import React, { useEffect } from 'react'
import AboutTabs from '../components/AboutTabs'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
      useEffect(() => {
        window.scrollTo(0, 0); // scroll to top whenever this component loads
      }, []);
  return (
<>
<div>
    <div className="container mx-auto">
        <div className="py-10">
          <div className="flex">
            <Link to="/">
              {" "}
              <p className=" font-semibold hover:underline hover:text-[#80bf1e]">Home</p>
            </Link>
            <FaAngleRight className=" mt-1" />
            <Link to="/about">
              <p className="text-[#0c0f3b] font-semibold  hover:underline">
             About
              </p>
            </Link>
          </div>
        </div>
    <div className="py-10">
        <h1 className='text-center text-3xl lg:text-6xl font-bold'>About  <span className="text-[#80bf1e] ">Us</span></h1>
    </div>
    <AboutTabs/>
</div>
</div>
</>
  )
}

export default About