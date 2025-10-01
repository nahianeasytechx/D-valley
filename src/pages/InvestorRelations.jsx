import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import relations from "../assets/relations.png"
import { annualReturns } from '../data/annualReturns';
const InvestorRelations = () => {
        useEffect(() => {
          window.scrollTo(0, 0); // scroll to top whenever this component loads
        }, []);
  return (
    
<>
<div className="container mx-auto">
        <div className="py-10">
          <div className="flex">
            <Link to="/">
              {" "}
              <p className=" font-semibold hover:underline hover:text-[#80bf1e]">Home</p>
            </Link>
            <FaAngleRight className=" mt-1" />
            <Link to="/investor-relations">
              <p className="text-[#0c0f3b] font-semibold  hover:underline">
             Investor Relations
              </p>
            </Link>
          </div>
        </div>
            <div className="py-5">
        <h1 className='text-center text-3xl lg:text-6xl font-bold'>Investor  <span className="text-[#80bf1e] ">Relations</span></h1>
    </div>

    <div className="flex justify-center py-10">
        <img src={relations} alt="" />
    </div>
<h1 className='text-center text-3xl py-5 font-semibold'>Annual Returns</h1>
    <div className="mx-0 sm:mx-40 lg:mx-48 mb-20">
{annualReturns.map(({ yearFrom, yearTo, link }) => {
  return (
    <div className="flex justify-between py-4" key={yearFrom + yearTo}>
      <h1 className="font-semibold text-xl">
        {yearFrom}-{yearTo}
      </h1>
      <a href={link}>
        <button className="mt-2 sm:mt-0 cursor-pointer flex gap-x-2 py-2 px-3 bg-[#80bf1e] rounded-lg text-white">
          Download
        </button>
      </a>
    </div>
  );
})}

      
    </div>
</div>
</>
  )
}

export default InvestorRelations