import { Link, useParams } from "react-router-dom";
import { residencies } from "../data/residencies";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
export default function ResidencyDetails() {
  const tabItems = ["Occupancy", "Amenities", "Details"];
  const [active, setActive] = useState("Occupancy"); // default active
const { slug } = useParams();
const residency = residencies.find((res) => res.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top whenever this component loads
  }, [slug]);
  
  if (!residency) {
    return <p className="p-6">Residency not found.</p>;
  }

  return (
    <>
    <div className="container mx-auto">
          <div className="flex gap-x-3">
            <p className="text-xl lg:text-2xl font-bold ">{residency.name}</p>
            <p className="bg-[#81bf1e8a] px-2 py-1 rounded-xl">
              {residency.gender}
            </p>
          </div>
                    <p className="py-2 text-xs md:text-sm lg:text-base">
            {residency.address}
          </p>
    </div>
      <div className="container mx-auto py-10 px-5 md:px-10 lg:px-0 scroll-smooth flex flex-wrap gap-x-5">
        <div className="w-full lg:w-[55%]">



          <img
            src={residency.image}
            alt=""
            className="mb-5 rounded-xl img-fluid w-full"
            loading="lazy"
          />
          <p>Starts From</p>
          <p className="lg:text-3xl font-semibold text-[#80bf1e]">
            {" "}
            ৳{residency.budget}
          </p>
          <p className="py-4">
            Final prices may vary based on room occupancy, customized services,
            and additional attributes.
          </p>
          <div className="border bg-white border-slate-100 py-4 px-16 flex flex-wrap justify-center space-x-8 md:space-x-10  rounded-xl shadow-lg sticky top-0 self-start">
            <button
              onClick={() => setActive("Occupancy")}
              className={`relative text-base md:text-xl  ${
                active === "Occupancy"
                  ? "text-[#80bf1e] "
                  : "text-gray-400 hover:text-[#80bf1e]"
              }`}
            >
          <a href="#occupancy">    Occupancy</a>
              {/* Optional: underline for active */}
              {active === "Occupancy" && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#80bf1e] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setActive("Amenities")}
              className={`relative text-base md:text-xl  ${
                active === "Amenities"
                  ? "text-[#80bf1e]"
                  : "text-gray-400 hover:text-[#80bf1e]"
              }`}
            >
           <a href="#amenities">Amenities</a>
              {/* Optional: underline for active */}
              {active === "Amenities" && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#80bf1e] rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setActive("Details")}
              className={`relative text-base md:text-xl  ${
                active === "Details"
                  ? "text-[#80bf1e]"
                  : "text-gray-400 hover:text-[#80bf1e]"
              }`}
            >
         <a href="#details"> Details</a>
              {/* Optional: underline for active */}
              {active === "Details" && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#80bf1e] rounded-full"></span>
              )}
            </button>
          </div>

          <div className="mt-5" id="occupancy">
            <p className="font-medium text-xl">Available Occupancies</p>
            <p className="text-2xl">2</p>
            <p className="text-2xl font-medium text-[#80bf1e]">
              {" "}
              ৳{residency.budget}
              <span className="text-black">/month</span>
            </p>
          </div>
          <div className="mt-5" id="amenities">
            <p className="font-medium text-xl">Amenities</p>
            <div className="flex py-2 space-x-4">
              <p className="text-sm bg-[#81bf1e60] px-3 py-1 rounded-xl">
                Attached Washroom
              </p>
              <p className="text-sm bg-[#81bf1e60] px-3 py-1 rounded-xl">
                Spacious Cupboard
              </p>
            </div>
            <p className="font-medium text-xl  my-2">Services</p>

            <div className="flex flex-wrap py-2 space-x-4 space-y-4">
              <p className="text-sm bg-[#81bf1e60] px-3 py-1 rounded-xl">
                High-Speed Wifi
              </p>
              <p className="text-sm bg-[#81bf1e60] px-3 py-1 rounded-xl">
                Professional Housekeeping
              </p>
              <p className="text-sm bg-[#81bf1e60] px-3 py-1 rounded-xl">
                24x7 Security Surveillance
              </p>
              <p className="text-sm bg-[#81bf1e60] px-3 py-1 rounded-xl">
              Water Purifier
              </p>
              <p className="text-sm bg-[#81bf1e60] px-3 py-1 lg:py-0 rounded-xl">
                Television facility
              </p>
            </div>
          </div>
          <div className="mt-5" id="details">
            <h1 className="text-2xl font-medium leading-10">Details of {residency.name}</h1>
        <p className="leading-8">Here will be the detais of the House  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quia nemo cupiditate reprehenderit ab natus est deserunt adipisci necessitatibus laudantium accusamus doloribus atque quam molestias ea magni ex voluptates numquam.</p>
          </div>

<Link to="/house-rules">
          <div className="my-3 py-5 px-5 flex justify-between border border-gray-300 rounded-xl">
            House Policy & Rules
            <FaAngleRight className="mt-1"/>
          </div>
</Link>
        </div>
        <div className="w-full lg:w-[40%]  sticky top-0 self-start ">
            <div className="flex flex-col  border border-slate-100 bg-white shadow-xl ">
                            <h1  className="py-3 text-white text-center text-3xl font-medium bg-[#96d62f] ">Contact Us </h1>
                       
            <form action="" className="py-2 px-10">
                <input type="text" placeholder="Name" className="w-full my-5 outline-none border border-gray-300 p-2 rounded-lg"/>
                
                <input type="tel" placeholder="Number" className="w-full mb-5 outline-none border border-gray-300 p-2 rounded-lg"/>
            </form>
                        <div className="w-full">
                <p className="text-center text-sm lg:text-xs  py-3 px-1 rounded-xl ">We accept bookings with a minimum stay of 3 months.</p>
            </div>
            </div>
<div className="mt-5 ">
     <button className="w-full bg-[#96d62f] py-3 rounded-lg text-white ">Schedule a Visit</button>
</div>

        </div>
      </div>
    </>
  );
}
