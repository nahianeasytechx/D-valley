import React from 'react'
import AboutTabs from '../components/AboutTabs'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
  return (
<>
<div>
    <div className="container mx-auto">
    <div className="py-20">
        <div className="flex">
          <Link to='/'>  <p className='text-[#808080] font-semibold hover:underline'>Home</p></Link>
<FaAngleRight className=' mt-1'/>
<Link to='/about'><p className='text-[#808080] font-semibold  hover:underline'>About</p></Link>
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