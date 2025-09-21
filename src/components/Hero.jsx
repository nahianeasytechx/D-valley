import React, { useState } from "react";
import BannerSlider from "./BannerSlider";
import Services from "./Services";
import Modal from "react-modal";
import popup1 from "../assets/popup1.png";
import popup2 from "../assets/popup2.png";
import popup3 from "../assets/popup3.png";
import popup4 from "../assets/popup 4.jpg"
import popup5 from "../assets/popup5.jpg"
import CounterPart from "./CounterPart";
import { HiBuildingOffice2 } from "react-icons/hi2";
Modal.setAppElement("#root"); // important for accessibility

const Hero = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Different modal content for each service
  const modalData = {
    "CO-Working Space": (
      <div>
        <label>Location: </label>
        <input type="search" placeholder="Find offices" className="px-2 py-3 border-2 border-gray-300 outline-none w-[55%] rounded-lg mr-5"/>
        <input type="submit" value="search" className="bg-[#80bf1e] px-4 py-3 rounded-lg text-white" />
<div className="my-4">
  <p className="text-xl">Offices:</p>
  <div className="flex gap-x-5 my-8 ">
<div className="cursor-pointer flex flex-col justify-center items-center">
  <HiBuildingOffice2
    className="
      text-[55px]
      transition-all duration-300 ease-in-out
      hover:bg-[#81bf1e6c] hover:rounded-full p-3
      transform hover:scale-135
    "
  />
  <p className=" pt-2">Dhanmondi</p>
</div>
<div className="cursor-pointer flex flex-col justify-center items-center">
  <HiBuildingOffice2
    className="
      text-[55px]
      transition-all duration-300 ease-in-out
      hover:bg-[#81bf1e6c] hover:rounded-full p-3
      transform hover:scale-135
    "
  />
  <p className=" pt-2">Shamoly</p>
</div>
<div className="cursor-pointer flex flex-col justify-center items-center">
  <HiBuildingOffice2
    className="
      text-[55px]
      transition-all duration-300 ease-in-out
      hover:bg-[#81bf1e6c] hover:rounded-full p-3
      transform hover:scale-135
    "
  />
  <p className=" pt-2">Gulshan</p>
</div>
<div className="cursor-pointer flex flex-col justify-center items-center">
  <HiBuildingOffice2
    className="
      text-[55px]
      transition-all duration-300 ease-in-out
      hover:bg-[#81bf1e6c] hover:rounded-full p-3
      transform hover:scale-135
    "
  />
  <p className=" pt-2">Uttara</p>
</div>

  </div>
</div>
      </div>
    ),
    "Co-Living for Professionals": (
      <div>
        <h2 className="text-2xl font-bold mb-4">Service 2</h2>
        <p>Collaborate, innovate, and thrive with others.</p>
      </div>
    ),
    "Co-s": (
      <div>
        <h2 className="text-2xl font-bold mb-4">Service 3</h2>
        <p>Unique description for Service 3.</p>
      </div>
    ),
    "Service 3": (
      <div>
        <h2 className="text-2xl font-bold mb-4">Service 3</h2>
        <p>Unique description for Service 3.</p>
      </div>
    ),
  };

  return (
    <>
      <div className="container relative mx-auto p-0 flex flex-wrap gap-x-4">
        <div className="w-full lg:w-[65%]">
          <BannerSlider />
        </div>
        <div className="mt-5 lg:mt-0 w-full lg:w-1/3 flex flex-col space-y-5">
          <Services
            img={popup5}
            description="Collaborate, innovate, and thrive with others"
            title="CO-Working Space"
            onClick={() => setSelectedService("CO-Working Space")}
          />
          <Services
            img={popup4}
            description="Chill hostel-style residences that are close to your office.Co-living for Professional"
            title="Co-Living for Professionals"
            onClick={() => setSelectedService("Co-Living for Professionals")}
          />
          <Services
            img={popup1}
            description="New-age hostels with all the amenities & vibrant living spaces.Modern Stude"
            title="Modern Student Housing"
            onClick={() => setSelectedService("Modern Student Housing")}
          />
          <Services
            img={popup3}
            description="modern-studentFully-furnished spaces with all essential amenities and zero capital investment"
            title="Managed Apartment"
            onClick={() => setSelectedService("Modern Student Housing")}
          />
        </div>
      </div>

      {/* React Modal */}
      <Modal
        isOpen={!!selectedService}
        onRequestClose={() => setSelectedService(null)}
        className="bg-white p-6 rounded-xl shadow-xl max-w-lg mx-auto mt-20 relative"
        overlayClassName="fixed inset-0 bg-[#00000096] bg-opacity-50 flex justify-center items-start z-50"
      >
        <button
          onClick={() => setSelectedService(null)}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {/* Inject dynamic modal content */}
        {modalData[selectedService]}
      </Modal>
      <CounterPart/>
    </>
  );
};

export default Hero;
