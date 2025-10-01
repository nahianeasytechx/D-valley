import logo from "../assets/Dvalley Logo Branding Plan.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-[#232728]">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center space-x-4 py-8 border-b-2 border-green-400 border-rounded">
            <button className="px-4 py-2  font-semibold rounded  cursor-pointer text-white focus:bg-[#80bf1e]">
           Dhanmondi
            </button>
            <button className="px-4 py-2 font-semibold rounded  cursor-pointer text-white focus:bg-[#80bf1e]">
              Mirpur
            </button>
            <button className="px-4 py-2  font-semibold  rounded cursor-pointer text-white focus:bg-[#80bf1e]">
             Uttara
            </button>
            <button className="px-4 py-2  font-semibold  rounded cursor-pointer text-white focus:bg-[#80bf1e]">
             Ghushan
            </button>
            <button className="px-4 py-2  font-semibold  rounded cursor-pointer text-white focus:bg-[#80bf1e]">
             Banani
            </button>
            <button className="px-4 py-2   font-semibold  rounded cursor-pointer text-white focus:bg-[#80bf1e]">
             Paltan
            </button>
          </div>

          <div className="py-36 flex flex-wrap">
<div className="w-full lg:w-1/6">
<img src={logo} alt="" className="w-[50%] lg:w-[70%] py-5 lg:py-0" />
</div>
<div className="w-full md:w-1/6">
<ul className="text-white   space-y-5">
  <li className="hover:underline cursor-pointer"><Link to="/about">About Us</Link></li>
  <li className="hover:underline cursor-pointer"><Link to="/team">Teams</Link></li>
  <li className="hover:underline cursor-pointer"><Link to="/investor-relations">Investors Relations</Link></li>
 
</ul>
</div>
<div className="w-full lg:w-1/6">
<ul className="text-white  space-y-5">
  <li className="hover:underline cursor-pointer">Blogs</li>
  <li className="hover:underline cursor-pointer">FAQs Relations</li>
  <li className="hover:underline cursor-pointer"><Link to="/house-rules">House Rules</Link></li>
</ul>
</div>
<div className="w-full lg:w-1/6">
<ul className="text-white  space-y-5">
  <li className="hover:underline cursor-pointer">T&C</li>
  <li className="hover:underline cursor-pointer"><Link className="/privacy-policy">Privacy Policy</Link></li>
  <li className="hover:underline cursor-pointer">Contact Us</li>

</ul>
</div>
<div className="w-1/6">
<ul className="text-white   space-y-5">
  <li className="hover:underline cursor-pointer"><Link to="/partner-with-us">Partner With Us</Link></li>
  <li className="hover:underline cursor-pointer">Cookie Policy</li>
  <li className="hover:underline cursor-pointer">Sitemap</li>

</ul>
</div>
<div className="w-full lg:w-1/6 my-3 lg:my-0">
<div className="flex space-x-4 ">
 <a href="https://www.facebook.com/dvalleybd" target="_blank" rel="noopener noreferrer"> <FaFacebook  className="text-2xl lg:text-3xl text-white cursor-pointer"/></a>
  <FaLinkedin  className="text-2xl lg:text-3xl text-white  cursor-pointer"/>
  <FaInstagramSquare  className="text-2xl lg:text-3xl text-white cursor-pointer"/>
  <FaYoutube  className="text-2xl lg:text-3xl text-white cursor-pointer"/> 
</div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
