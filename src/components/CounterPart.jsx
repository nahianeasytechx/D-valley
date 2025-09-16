import React from "react";
import cities from "../assets/citiesicon.png";
import residencies from "../assets/residencies.png";
import beds from "../assets/beds.png";
import CountUp from 'react-countup';
const CounterPart = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex ">
        <div className="w-1/3 shadow-xl flex flex-wrap lg:space-x-2  justify-center rounded-xl lg:shadow-none lg:rounded-none">
      <img src={cities} alt="citiesicon.png" className="mr-2" />
          <p className="text-[30px] lg:text-xl mt-2">
            <CountUp end={15} /> + Cities
          </p>
        </div>
        <div className="w-1/3 shadow-xl flex flex-wrap lg:space-x-2  justify-center rounded-xl lg:shadow-none lg:rounded-none">
      <img src={residencies} alt="citiesicon.png"  className="mr-2"/>
          <p className="text-[30px] lg:text-xl mt-2">
            <CountUp end={450} /> + Residences
          </p>
        </div>
        <div className="w-1/3 shadow-xl flex flex-wrap lg:space-x-2  justify-center rounded-xl lg:shadow-none lg:rounded-none">
      <img src={cities} alt="citiesicon.png" className="mr-2" />
          <p className="text-[30px] lg:text-xl mt-2">
            <CountUp end={50000} /> + Beds
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterPart;
