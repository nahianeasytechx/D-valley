import React from 'react'
import HouseRulesTabs from '../components/HouseRulesTabs'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HouseRules = () => {
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
            <Link to="/house-rules">
              <p className="text-[#0c0f3b] font-semibold  hover:underline">
             House Rules
              </p>
            </Link>
          </div>
              <div className="py-10">
        <h1 className='text-center text-3xl lg:text-6xl font-bold'>House  <span className="text-[#80bf1e] ">Rules</span></h1>
    </div>
    </div>
<HouseRulesTabs/>
</div>
</>
  )
}

export default HouseRules