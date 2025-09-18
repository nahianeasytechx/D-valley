import React from "react";
import cities from "../assets/citiesicon.png";
import residencies from "../assets/residencies.png";
import CountUp from 'react-countup';
import { FaRegBuilding } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
const CounterPart = () => {
  return (
    <div className="w-full mx-auto py-8">
      <div className={`flex `}>
        <div className="w-1/3 shadow-xl flex flex-wrap lg:space-x-2  justify-center rounded-xl lg:shadow-none lg:rounded-none">
    <FaRegBuilding className="mt-2 text-3xl text-[#80bf1e]"/>
          <p className="text-2xl lg:text-[30px]   text-center lg:text-xl mt-2">
            <CountUp end={15} /> + Residences
          </p>
        </div>
        <div className="w-1/3 shadow-xl flex flex-wrap lg:space-x-2  justify-center rounded-xl lg:shadow-none lg:rounded-none">
    <FaRegBuilding className="mt-2 text-3xl text-[#80bf1e]"/>
          <p className="text-2xl lg:text-[30px]   text-center lg:text-xl mt-2">
            <CountUp end={450} /> + Residences
          </p>
        </div>
        <div className="w-1/3 shadow-xl flex flex-wrap lg:space-x-2  justify-center rounded-xl lg:shadow-none lg:rounded-none">
     <FaBed className="mt-1 lg:mt-2 text-[45.5px] text-[#80bf1e]"/>
          <p className="text-2xl lg:text-[30px]  text-center lg:text-xl mt-2">
            <CountUp end={50000} /> + Beds
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterPart;
