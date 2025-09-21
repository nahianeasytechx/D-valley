import React from "react";
import cities from "../assets/citiesicon.png";
import residencies from "../assets/residencies.png";
import CountUp from 'react-countup';
import { FaRegBuilding } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
const CounterPart = () => {
  return (
    <div className="container mx-auto py-8">
      <div className={`flex flex-wrap justify-center items-center  gap-3 lg:gap-0`}>
        <div className="lg:w-1/3 flex flex-wrap lg:flex-nowrap lg:space-x-2  justify-center items-center rounded-xl lg:shadow-none lg:rounded-none">
    <div className="box-shadow   p-5  lg:px-20 lg:py-10 rounded-xl">
       <div className="flex  justify-center items-center">
           <FaCity className=" mt-2 text-3xl text-[#80bf1e]"/>
       </div>
          <p className=" lg:text-[18px] font-bold  text-center lg:text-xl mt-2">
            <CountUp end={15} /> +  Residences
          </p>
    </div>

        </div>
        <div className="lg:w-1/3 flex  flex-wrap lg:space-x-2  justify-center items-center rounded-xl lg:shadow-none lg:rounded-none">
      <div className="box-shadow lg:px-20 lg:py-10  p-5 rounded-xl">
               <div className="flex justify-center items-center">
             <FaRegBuilding className="mt-2 text-3xl text-[#80bf1e]"/>
       </div>

          <p className=" lg:text-[18px]  font-bold text-center lg:text-xl mt-2">
            <CountUp end={450} /> +  Residences
          </p>
    </div>
  

        </div>
        <div className="lg:w-1/3  flex  flex-wrap lg:space-x-2  justify-center items-center rounded-xl lg:shadow-none lg:rounded-none">
         <div className="box-shadow   p-5 lg:px-20 lg:py-10 rounded-xl">
               <div className="flex justify-center items-center">
      <FaBed className="mt-1 lg:mt-2 text-3xl text-[#80bf1e]"/>
       </div>

          <p className=" lg:text-[18px] font-bold text-center lg:text-xl mt-2">
            <CountUp end={50000} /> +  Beds
          </p>
    </div>

        </div>
      </div>
    </div>
  );
};

export default CounterPart;
