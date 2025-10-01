import { Link } from "react-router-dom";
import Modal from "react-modal"
import { FaAngleRight } from "react-icons/fa";
import partner1 from "../assets/partner-with-us1.jpg";
import partner2 from "../assets/partner-with-us2.jpg";
import partner3 from "../assets/partner-with-us3.jpg";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdApartment } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaDownload } from "react-icons/fa6";
import { useEffect, useState } from "react";

Modal.setAppElement("#root"); // keep accessibility 
const PartnerWithUs = () => {
  const [isModalOpen,setIsModalOpen]=useState(false);
    useEffect(() => {
      window.scrollTo(0, 0); // scroll to top whenever this component loads
    }, []);
    
  return (
    <div className="bg-gradient-to-b from-[#c0fc5f36] to-[#fff]">
      <div className="container mx-auto">
        <div className="py-20">
          <div className="flex">
            <Link to="/">
              {" "}
              <p className=" font-semibold hover:underline hover:text-[#80bf1e]">
                Home
              </p>
            </Link>
            <FaAngleRight className=" mt-1" />
            <Link to="/partner-with-us">
              <p className="text-[#0c0f3b] font-semibold  hover:underline">
                Partner with us
              </p>
            </Link>
          </div>
        </div>
        <div className="py-5">
          <h1 className="lg:px-[150px] xl:px-[300px] text-center font-bold text-xl md:text-3xl lg:text-[56px] text-[#0c0f3b]">
            'You've come to the{" "}
            <span className="text-[#8be001] ">“right place” </span> , partner
          </h1>
          <p className="leading-7  text-center lg:text-xl py-4 lg:px-20 2xl:px-56 ">
            Whatever we've achieved in the past few years has been made possible
            due to the mutual support and cooperation of the people we proudly
            call our partners. If you too wish to make your property earn to the
            best of its ability, find captive mainspace for your products or
            services, and/or provide the best living experience for your people,
            you've come to the right place.
          </p>
        </div>
        <div className="m-[72px] flex p-5 shadow-xl rounded-3xl">
          <div className="p-4 hidden  lg:flex lg:flex-col lg:w-1/2 ">
            <h1
              className="py-3
               font-bold text-4xl text-[#0c0f3b] "
            >
              Your people in the{" "}
              <span className="text-[#80bf1e]"> right care</span>
            </h1>
            <p className="py-5 leading-7 text-sm sm:text-xl text-[#4E5253]">
              No matter what you're looking to lease out - an apartment, a
              house, an under-construction building, an existing hostel/PG or
              something else altogether, we have a plan for it. We can not only
              help your property mint money for you but also turn it into a
              local landmark. Partner with us and turn your asset into a growing
              business.
            </p>
            <p className="text-[18px]  py-4">Read more about the plan:</p>

            <div className="flex  justify-between mt-2" >
<div>
                <p className="flex  md:items-center gap-2 text-base  min-w-[150px]">
                <span className="text-2xl text-[#80bf1e]">
                  <BsBuildings />
                </span>
             For your building :
              </p>
</div>
<div>
                <button className="mt-2 sm:mt-0 flex items-center gap-2 py-2 px-3 border border-[#80bf1e] rounded-lg text-[#80bf1e] ">
                <span className="text-xl">
                  <MdOutlineFileDownload />
                </span>
                Download the brochure
              </button>
</div>
            </div>

            <br />
            <div className="flex flex-wrap justify-between">
              <p className="flex gap-x-4 text-base">
                <span className="text-2xl text-[#80bf1e]">
                  <BsBuildings />{" "}
                </span>
                For your Apartment:
              </p>
              <button className="mt-2 sm:mt-0 cursor-pointer flex gap-x-2 py-2 px-3 border border-[#80bf1e] rounded-lg text-[#80bf1e]">
                <span className="text-xl ">
                  <MdApartment />
                </span>
                Download the brochure
              </button>
            </div>
            <div className="flex justify-between py-8">
              <p className="mt-2 text-base">
                Leave your details here for us to contact you :
              </p>
              <button
                 onClick={() => setIsModalOpen(true)}
              className=" cursor-pointer flex gap-x-2 py-2 px-3 border  rounded-lg bg-[#80bf1e] text-white font-semibold">
                Contact us
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1
              className="py-3
               font-bold text-2xl sm:text3xl text-center text-[#0c0f3b] lg:hidden"
            >
              Your property in the{" "}
              <span className="text-[#80bf1e]">your life</span>
            </h1>
            <div className="flex justify-center lg:justify-end lg:w-full">
              <img src={partner1} alt="how1.avif" />
            </div>
            <p className="py-5 leading-5 lg:hidden text-[#4E5253] text-center">
              No matter what you're looking to lease out - an apartment, a
              house, an under-construction building, an existing hostel/PG or
              something else altogether, we have a plan for it. We can not only
              help your property mint money for you but also turn it into a
              local landmark. Partner with us and turn your asset into a growing
              business.
            </p>
            <div className="my-4 lg:hidden">
              <p className="text-[18px]">Read more about the plan:</p>
              <br />
              <div className="lg:flex lg:justify-between flex flex-col justify-center  md:px-0">
                <p className="flex gap-x-4 text-sm">
                  <span className="text-xl text-[#80bf1e] ">
                    <BsBuildings />{" "}
                  </span>
                  For your building/plot:
                </p>
                <button className="mt-3 md:mt-0 cursor-pointer flex  py-2 px-3 border border-[#80bf1e] rounded-lg text-[#80bf1e] text-sm">
                  <span className="text-xl ">
                    <MdApartment />
                  </span>
                  Download the brochure
                </button>
              </div>
              <br />
              <div className="lg:flex lg:justify-between flex flex-col justify-center  md:px-0">
                <p className="flex gap-x-4 text-sm">
                  <span className="text-xl text-[#80bf1e]">
                    <BsBuildings />{" "}
                  </span>
                  For your Apartment:
                </p>
                <button className="mt-2 md:mt-0 cursor-pointer flex gap-x-2 py-2 px-3 border border-[#80bf1e] rounded-lg text-[#80bf1e] text-sm">
                  <span className="text-xl ">
                    <MdApartment />
                  </span>
                  Download the brochure
                </button>
              </div>
              <br />
              <br />
              <div className="flex flex-col justify-center ">
                <p className="text-center text-base">
                  Leave your details here for us to contact you :
                </p>

                <div className="mx-auto mt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                  className="w-30 h-11 cursor-pointer   py-2 px-3 border  rounded-lg bg-[#80bf1e] text-white font-semibold">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-[72px] flex p-5 shadow-xl rounded-3xl">
          <div className="p-4 hidden lg:flex lg:flex-col lg:w-1/2 ">
            <h1
              className="py-3
               font-bold text-4xl text-[#0c0f3b] "
            >
              Your product with the{" "}
              <span className="text-[#80bf1e]">right consumer </span>
            </h1>
            <p className="py-5 leading-7 text-xl text-[#4E5253]">
              You care for your people, and so do we. Let's give them more than
              just four walls and a roof. Let's give them a place where they'll
              feel taken care of. From safety to amenities, we'll leave them
              wanting nothing. And for this to happen, all you have to do is to
              partner with us (and your people will thank you for it).
            </p>
            <p className="text-[18px] ">Read more about the plan:</p>
            <br />
            <div className="flex  flex-wrap justify-between">
              <p className="flex gap-x-4 mt-2 ">
                <span className=" text-[#80bf1e] text-2xl">
                  <GiGraduateCap />{" "}
                </span>
                For college hostels :
              </p>
              <button className="mt-2 sm:mt-0 cursor-pointer flex  py-2 px-3 border border-[#80bf1e] rounded-lg text-[#80bf1e] text-sm">
                <span className="text-xl ">
                  <FaDownload />
                </span>
                Download the brochure
              </button>
            </div>
            <br />

            <div className="flex justify-between py-8">
              <p className="mt-2 text-base">
                Leave your details here for us to contact you :
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
              className=" cursor-pointer flex gap-x-2 py-2 px-3 border  rounded-lg bg-[#80bf1e] text-white font-semibold">
                Contact us
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1
              className="py-3
               font-bold text-3xl text-center text-[#0c0f3b] lg:hidden"
            >
              Your people in the{" "}
              <span className="text-[#80bf1e]"> right care</span>
            </h1>
            <div className="flex justify-center lg:justify-end lg:w-full">
              <img src={partner2} alt="partner2.jpg" />
            </div>
            <p className="py-5 leading-5 lg:hidden text-[#4E5253] text-center">
              You care for your people, and so do we. Let's give them more than
              just four walls and a roof. Let's give them a place where they'll
              feel taken care of. From safety to amenities, we'll leave them
              wanting nothing. And for this to happen, all you have to do is to
              partner with us (and your people will thank you for it).
            </p>
            <div className="my-4 lg:hidden">
              <p className="text-[18px]">Read more about the plan:</p>
              <br />
              <div className="flex flex-col justify-center">
                <p className="flex gap-x-4 mt-2 ">
                  <span className=" text-[#80bf1e] text-xl">
                    <GiGraduateCap />
                  </span>
                  For college hostels:
                </p>
                <button className="mt-2 md:mt-0 cursor-pointer flex  py-2 px-3 border border-[#80bf1e] rounded-lg text-[#80bf1e] text-sm">
                  <span className="text-xl lg:text-2xl ">
                    <FaDownload />
                  </span>
                  Download the brochure
                </button>
              </div>
              <br />

              <br />
              <br />
              <div className="flex flex-col justify-center ">
                <p className="text-center text-base">
                  Leave your details here for us to contact you :
                </p>

                <div className="mx-auto mt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                  className="w-30 h-11 cursor-pointer   py-2 px-3 border  rounded-lg bg-[#80bf1e] text-white font-semibold">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-[72px] flex p-5 shadow-xl rounded-3xl">
          <div className="p-4 hidden lg:flex lg:flex-col lg:w-1/2 ">
            <h1
              className="py-3
               font-bold text-4xl text-[#0c0f3b] "
            >
              Your product with the{" "}
              <span className="text-[#80bf1e]"> right consumer</span>
            </h1>
            <p className="py-5 leading-7 text-xl text-[#4E5253]">
              As a growing company, we're always looking for people who can take
              care of our daily, weekly, monthly and yearly supply needs. From
              pulses for our kitchens to printers for our office, If you think
              you have something we might need, we're all ears. Contact us and
              see your business have a whole Bangladesh presence in no time.
            </p>

            <div className="flex justify-between py-8">
              <p className="mt-2 text-base">
                Leave your details here for us to contact you :
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
              className=" cursor-pointer flex gap-x-2 py-2 px-3 border  rounded-lg bg-[#80bf1e] text-white font-semibold">
                Contact us
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1
              className="py-3
               font-bold text-3xl text-center text-[#0c0f3b] lg:hidden"
            >
              Your product with the{" "}
              <span className="text-[#80bf1e]">right consumer</span>
            </h1>
            <div className="flex justify-center lg:justify-end lg:w-full">
              <img src={partner3} alt="partner3.jpg" />
            </div>
            <p className="py-5 leading-5 lg:hidden text-[#4E5253] text-center">
              As a growing company, we're always looking for people who can take
              care of our daily, weekly, monthly and yearly supply needs. From
              pulses for our kitchens to printers for our office, If you think
              you have something we might need, we're all ears. Contact us and
              see your business have a whole Bangladesh presence in no time.
            </p>
            <div className="my-4 lg:hidden">
              <br />
              <br />
              <div className="flex flex-col justify-center ">
                <p className="text-center text-base">
                  Leave your details here for us to contact you :
                </p>

                <div className="mx-auto mt-2">
                  <button className="w-30 h-11 cursor-pointer   py-2 px-3 border  rounded-lg bg-[#80bf1e] text-white font-semibold">
                    Contact us
                  </button>
                </div>

                
              </div>
            </div>
          </div>
        </div>
        
      </div>
     {/* Contact Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="bg-white p-6 rounded-xl shadow-xl max-w-lg mx-auto relative"
          overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4 text-[#0c0f3b]">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-3 py-2 rounded-lg"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border px-3 py-2 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-[#80bf1e] text-white font-semibold py-2 rounded-lg hover:bg-[#6ea818] transition"
            >
              Submit
            </button>
          </form>
        </Modal>
    </div>
  );
};

export default PartnerWithUs;
