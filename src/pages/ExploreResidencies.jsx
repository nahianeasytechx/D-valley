import React from 'react'
import ResidenciesSlider from '../components/ResidenciesSlider'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ResidentModal from '../components/ResidentModal';
import ResidentItems from '../components/ResidentItems';
const ExploreResidencies = () => {
  return (
    <>
<div className="container mx-auto  lg:px-10 pb-10 ">
<ResidenciesSlider/>
          <div className="flex">
            <Link to="/">
              {" "}
              <p className=" font-semibold hover:underline hover:text-[#80bf1e]">Home</p>
            </Link>
            <FaAngleRight className=" mt-1" />
            <Link to="/explore-residencies">
              <p className="text-[#0c0f3b] font-semibold  hover:underline">
             Explore
              </p>
            </Link>
          </div>
     <div className="flex justify-end"> </div>
     <ResidentItems/>
</div>
    </>
  )
}

export default ExploreResidencies